/*
 * /.grunt/usemin.js
 */
'use strict';

module.exports = function(grunt,options) {
  return {

    html: ['<%= paths.build %>/views/{,*/}*.html'],
    css: ['<%= paths.build %>/public/styles/{,*/}*.css'],
    options: {
      assetsDirs: ['<%= paths.build %>']
    }

  }
};