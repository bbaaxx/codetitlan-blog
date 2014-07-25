/*
 * /routes/application.js
 */

(function(){
  'use strict';


  App.ApplicationRoute = Ember.Route.extend({

    setupController: function(controller) {
      controller.setProperties({
        menus: {
          main: ['dudes','posts']
        },
        appName: 'Codetitlan',
        console: {
          userObj: JSON.stringify(window.user),
          mdrnObj: JSON.stringify(window.Modernizr)
        }
      });
    }

  });


})();

