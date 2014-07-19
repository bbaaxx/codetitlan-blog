/*
 * /controllers/application.js
 */

(function(){
  'use strict';

  App.ApplicationController = Ember.Controller.extend({
    // TODO - Get these settings dynamically
    appName: 'Codetitilan',
    mainMenu: ['dudes','posts'],
    opt:{
      container: true
    }

  });

})();