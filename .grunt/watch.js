/*
 * /.grunt/watch.js
 */

module.exports = {

  server: {
    files: ['.reboot'],
    options: { livereload: true }
  },
  templates: {
    files: [ 'app/js/templates/**/*.hbs' ],
    tasks: [ 'refreshTemplates' ],
    options: { livereload: true }
  },
  js: {
    files: ['app/js/**/*.js'],
    options: { livereload: true }
  },
  gruntfile: {
    files: ['Gruntfile.js'],
    options: { reload: true }
  }

};