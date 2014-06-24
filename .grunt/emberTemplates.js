/*
 * /.grunt/emberTemplates.js
 */

module.exports = {

  compile: {
    options: {
      templateBasePath: /app\/js\/templates\//
    },
    files: {
      'app/js/templates.js': 'app/js/templates/**/*.hbs'
    }
  }

};