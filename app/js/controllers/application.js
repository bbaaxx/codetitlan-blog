/*
 * /controllers/application.js
 */

(function(){
  'use strict';

  App.ApplicationController = Ember.ObjectController.extend({
    appName: null,
    console: {
      userObj: null,
      mdrnObj: null
    },
    menus: null
  });

})();
