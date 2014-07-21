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
var clean            = require('gulp-clean'),
    wait             = require('gulp-wait'),
    sass             = require('gulp-sass'),
    autoprefixer     = require('gulp-autoprefixer'),
    rename           = require('gulp-rename'),
    minifycss        = require('gulp-minify-css'),
    concat           = require('gulp-concat'),
    emberTemplates   = require('gulp-ember-templates'),
    jshint           = require('gulp-jshint'),
    cache            = require('gulp-cached'),
    remember         = require('gulp-remember'),
    lrSrv            = require('tiny-lr')(),
    livereload       = require('gulp-livereload'),
    notify           = require('gulp-notify');
/*
uglify = require('gulp-uglify'),
imagemin = require('gulp-imagemin'),
*/

var globs = {
  clientJs: ['app/js/**/*.js', '!app/js/templates.js'],
  serverJs: ['server/**/*.js', 'server.js'],
  emberTemplates: ['app/js/templates/**/*.hbs'],
  scssEntry: ['app/styles/scss/main.scss'],
  generatedStyles: ['app/styles/css/*.css']
};
var nodeInstance;

// Cleanup directories and files
gulp.task('devCleanup', function() {
  return gulp.src(['app/styles/css/*', 'app/js/templates/templates.js'], {read: false})
    .pipe(clean());
});
gulp.task('buildCleanup', function() {
  return gulp.src(['app/styles/css/*', 'app/js/templates/templates.js'], {read: false})
    .pipe(clean());
});

// Ember Templates
gulp.task('templates', function() {
  return gulp.src(globs.emberTemplates)
  .pipe(cache('templates'))
  .pipe(emberTemplates())
  .pipe(remember('templates'))
  .pipe(concat('templates.js'))
  .pipe(gulp.dest('app/js'))
  .pipe(notify({ message: 'Templates task complete' }));
});

// Scripts
gulp.task('jshintClientJs', function() {
  return gulp.src(globs.clientJs)
  .pipe(cache('clientJs'))
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'))
  //.pipe(jshint.reporter('fail'))
  .pipe(livereload(lrSrv));
});
gulp.task('jshintServerJs', function() {
  return gulp.src(globs.serverJs)
  .pipe(cache('serverJs'))
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'))
  //.pipe(jshint.reporter('fail'))
  .pipe(wait(1000))
  .pipe(livereload(lrSrv));
});

// Styles
gulp.task('styles', function() {
  return gulp.src(globs.scssEntry)
  .pipe(sass({ outputStyle: 'nested', sourceComments: 'normal' }))
  .pipe(autoprefixer('last 1 version'))
  .pipe(gulp.dest('app/styles/css'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(minifycss())
  .pipe(livereload(lrSrv))
  .pipe(gulp.dest('public/styles'))
  .pipe(notify({ message: 'Styles task complete' }));
});

// Express Server
gulp.task('server', function() {
  if (nodeInstance) { nodeInstance.kill(); }
  nodeInstance = spawn('node', ['server.js'], { stdio: 'inherit' });
  nodeInstance.on('close', function (code) {
    if (code === 8) {
      console.log('Error detected, waiting for changes...');
    }
  });
});

// Watch task
gulp.task('watch',function(){
  // Trigger actions when server files change
  gulp.watch(globs.serverJs, ['jshintServerJs','server']);
  // Trigger actions when client files change
  gulp.watch(globs.clientJs, ['jshintClientJs']);
  gulp.watch(globs.emberTemplates, ['templates'])
    .on('change', function(){
      if (event.type === 'deleted') { // if a file is deleted, forget about it
        delete cache.caches['templates'][event.path];
        remember.forget('templates', event.path);
      }
    }
  );
  gulp.watch(globs.generatedStyles, ['styles']);
});


// Aliases
gulp.task('dev', [
  //'livereloadServer',
  'devCleanup',
  'styles',
  'templates',
  'server',
  'watch'
  ]
);



gulp.task('default', ['dev']);


/*
*/
