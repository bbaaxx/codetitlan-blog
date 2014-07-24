/*
 * Gulpfile.js
 */
'use strict';
/*
 * Module dependencies
 */
var gulp           = require('gulp'),
    spawn          = require('child_process').spawn;

// Load gulp plugins
var gutil          = require('gulp-util'),
    wait           = require('gulp-wait'),
    sass           = require('gulp-sass'),
    autoprefixer   = require('gulp-autoprefixer'),
    rename         = require('gulp-rename'),
    minifycss      = require('gulp-minify-css'),
    concat         = require('gulp-concat'),
    emberTemplates = require('gulp-ember-templates'),
    jshint         = require('gulp-jshint'),
    uglify         = require('gulp-uglify'),
    // imagemin       = require('gulp-imagemin'),
    cache          = require('gulp-cached'),
    remember       = require('gulp-remember'),
    lrSrv          = require('tiny-lr'),
    livereload     = require('gulp-livereload'),
    mocha          = require('gulp-spawn-mocha'),
    plumber        = require('gulp-plumber'),
    grimraf        = require('gulp-rimraf'),
    notify         = require('gulp-notify');

// Get the assets file
// TODO - Fully integrate the assets file with build system
var assets = require('server/config/assets');

var globs = {
  clientJs: ['app/js/**/*.js', '!app/js/templates.js'],
  serverJs: ['server/**/*.js', 'server.js'],
  emberTemplates: ['app/js/templates/**/*.hbs'],
  scssEntry: ['app/styles/scss/main.scss'],
  scssStyles: ['app/styles/scss/**/*.scss'],
  generatedStyles: ['app/styles/css/*.css'],
  serverTests: ['tests/mocha/**/*.js']
};
var devNodeInstance;

// Cleanup directories and files
gulp.task('devCleanup', function() {
  return gulp.src(['app/styles/css/**/*', 'app/js/templates.js'], {read: false})
    .pipe(grimraf());
});
gulp.task('buildCleanup', function() {
  return gulp.src(['public/**/*'], {read: false})
    .pipe(grimraf({ force: true }));
});

// Ember Templates
gulp.task('templates', function() {
  return gulp.src(globs.emberTemplates)
  .pipe(cache('templates'))
  .pipe(emberTemplates())
  .pipe(remember('templates'))
  .pipe(concat('templates.js'))
  .pipe(gulp.dest('app/js'))
  .pipe(livereload(lrSrv))
  .pipe(notify({ message: 'Templates task complete' }));
});
gulp.task('buildTemplates', function() {
  return gulp.src(globs.emberTemplates)
  .pipe(emberTemplates())
  .pipe(concat('templates.dist.js'))
  .pipe(uglify())
  .pipe(gulp.dest('public/js'));
});

// Lint
gulp.task('lintClient', function() {
  return gulp.src(globs.clientJs)
  .pipe(cache('clientJs'))
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'))
  .pipe(livereload(lrSrv));
});
gulp.task('lintServer', function() {
  return gulp.src(globs.serverJs)
  .pipe(cache('serverJs'))
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'))
  .pipe(wait(1000))
  .pipe(livereload(lrSrv));
});

// Scripts
// TODO - This is duplicated code !!! | Learn to use gulp better
gulp.task('buildLibsJs', function() {
  return gulp.src(assets.js.libs.src.map(function(v){return 'app/'+v;}))
  .pipe(concat('libs.dist.js'))
  .pipe(uglify())
  .pipe(gulp.dest('public/js'));
});
gulp.task('buildAppJs', function() {
  return gulp.src(assets.js.app.src.map(function(v){return 'app/'+v;}))
  .pipe(concat('app.dist.js'))
  .pipe(uglify())
  .pipe(gulp.dest('public/js'));
});

// Styles
gulp.task('styles', function() {
  return gulp.src(globs.scssEntry)
  .pipe(sass({ outputStyle: 'nested', sourceComments: 'normal' }))
  .pipe(autoprefixer('last 1 version'))
  .pipe(gulp.dest('app/styles/css'))
  .pipe(livereload(lrSrv))
  .pipe(notify({ message: 'Styles task complete' }));
});
gulp.task('buildAppStyles', function() {
  return gulp.src(globs.scssEntry)
  .pipe(sass({ outputStyle: 'nested', sourceComments: 'normal' }))
  .pipe(autoprefixer('last 1 version'))
  .pipe(rename({ suffix: '.dist' }))
  .pipe(minifycss())
  .pipe(gulp.dest('public/styles'));
});
gulp.task('buildLibsStyles', function() {
  return gulp.src(assets.styles.libs.src.map(function(v){return 'app/'+v;}))
  .pipe(minifycss())
  .pipe(concat('libs.dist.css'))
  .pipe(gulp.dest('public/styles'));
});

// Server tests
gulp.task('mocha', function(){
  return gulp.src(globs.serverTests)
  .pipe(plumber())
  .pipe(jshint())
  .pipe(mocha({
    env: {'NODE_ENV': 'test'},
    reporter:'nyan',
    require: ['server.js']
  }))
  .pipe(notify({message: 'Mocha tests complete !'}));
});

// Express Server
gulp.task('devServer', function() {
  if (devNodeInstance) { devNodeInstance.kill(); }

  devNodeInstance = spawn('node', ['server.js'], { stdio: 'inherit' });
  devNodeInstance.on('close', function (code) {
    if (code === 8) {
      gutil.log('Error detected, waiting for changes...');
    }
  });
});

// Watch task
gulp.task('watch',function(){
  // Trigger actions when server files change
  gulp.watch(globs.serverJs, ['lintServer','devServer']);
  // Trigger actions when client files change
  gulp.watch(globs.clientJs, ['lintClient']);

  gulp.watch(globs.emberTemplates, ['templates']).on('change', function(event){
    if (event.type === 'deleted') {
      delete cache.caches.templates[event.path];
      remember.forget('templates', event.path);
    }
  });
  gulp.watch(globs.scssStyles, ['styles']);
  gulp.watch(globs.serverTests, ['mocha']);
});

gulp.task('doit', function() {
  console.log(
    assets.js.libs.src.map(function(v){return 'app/'+v;}),
    assets.js.app.src.map(function(v){return 'app/'+v;})
  );
});


// Aliases
gulp.task('dev', [
  //'livereloadServer',
  'devCleanup',
  'styles',
  'templates',
  'devServer',
  'watch'
  ]);

gulp.task('build', [
  'buildCleanup',
  // TODO - Create server tests tasks that stops build if fail,
  'buildAppStyles',
  'buildLibsStyles',
  'buildTemplates',
  // TODO - Include headless tests for the client,
  'buildLibsJs',
  'buildAppJs',
  ]);


gulp.task('default', ['dev']);


/*
*/
