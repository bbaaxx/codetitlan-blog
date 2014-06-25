/*
 * /.grunt/imagemin.js
 */
'use strict';

module.exports = function(grunt,options) {
  return {
    options: {
      cache: false
    },
    dist: {
      files: [{
        expand: true,
        cwd: '<%= paths.images %>',
        src: '{,*/}*.{png,jpg,jpeg,gif}',
        dest: '<%= paths.bldimages %>'
      }]
    }
  
  }
};
