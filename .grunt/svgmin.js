/*
 * /.grunt/svgmin.js
 */
'use strict';

module.exports = function(grunt,options) {
  return {

    dist: {
      files: [{
        expand: true,
        cwd: '<%= paths.images %>',
        src: '{,*/}*.svg',
        dest: '<%= paths.bldimages %>'
      }]
    }
  
  }
};
