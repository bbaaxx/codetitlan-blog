/*
 * /.grunt/bowerInstall.js
 */
'use strict';

module.exports = function(grunt,options) {
  return {

    target: {
      src: ['<%= paths.serverjs %>/views/index.html'],
      // cwd: '<%= paths.app %>',
      dependencies: true,
      devDependencies: false,
      exclude: ['modernizr'],
      fileTypes: {},
      ignorePath: '',
      overrides: {}
    }

  }
};