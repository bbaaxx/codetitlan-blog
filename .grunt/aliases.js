/*
 * /.grunt/aliases.js
 */
'use strict';

module.exports = function(grunt,options) {

  return {
    dev: ['clean:dev', 'emberTemplates', 'compass:dev', 'concurrent:dev'],
    refreshTemplates: ['clean:templates','emberTemplates']
  }

};
