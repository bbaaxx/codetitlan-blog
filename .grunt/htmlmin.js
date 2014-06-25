/*
 * /.grunt/cdnify.js
 */
'use strict';

module.exports = function(grunt,options) {
  return {

  dist: {
    options: {
      //collapseWhitespace: true,
      //collapseBooleanAttributes: true,
      //removeCommentsFromCDATA: true,
      //removeOptionalTags: true
    },
    files: [{
      expand: true,
      cwd: '<%= paths.serverjs %>/views',
      src: ['*.html','./**/*.html'],
      dest: '<%= paths.build %>/views'
    }]
    }

  }
};
