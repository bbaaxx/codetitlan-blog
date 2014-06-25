/*
 * /.grunt/cdnify.js
 */
'use strict';

module.exports = function(grunt,options) {
  return {

    build: {
      html: ['<%= paths.serverjs %>/views/*.html']
    }

  }
};
