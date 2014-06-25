/*
 * /.grunt/emberTemplates.js
 */
'use strict';

module.exports = function(grunt,options) {
  return {

    // TODO - Make absolute paths go away !
    compile: {
      options: {
        templateBasePath: /app\/js\/templates\//
      },
      files: {
        'app/js/templates.js': '<%= sets.hbsRawTemplates %>'
      }
    }

  }
};
