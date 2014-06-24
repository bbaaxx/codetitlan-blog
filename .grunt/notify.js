/*
 * /.grunt/notify.js
 */
'use strict';

module.exports = function(grunt,options) {
  return {

    refreshTemplates: {
      options: {
        title: 'Templates updated',
        message: 'Grunt has successfully compiled your Ember templates !'
      }
    },

    nodemon: {
      options: {
      	title: 'Nodemon',
      	message: 'Application started'
      }
    }
    
  }
};
