/*
 * /.grunt/useminPrepare.js
 */
'use strict';

module.exports = function(grunt,options) {
  return {

    html: ['<%= paths.serverjs %>/views/index.html'],
    options: {
      dest: '<%= paths.build %>'
    }

  }
};