/*
 * /controllers/application.js
 */

(function(){
  'use strict';

  App.ApplicationController = Ember.Controller.extend({
    appName: 'Codetitlan',
    mainMenu: ['embl','dudes'],
    opt:{
    	container: true
    }
  });

})();