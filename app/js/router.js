/*
 * router.js
 */

(function(){
  'use strict';

  App.Router.map(function(){
    this.route('emberlearn');
  });

  App.IndexRoute = Ember.Route.extend({

    setupController: function(controller) {
      // Set the IndexController's `title`
      controller.set('title', "Dudleytitlan");
    }
    
  });
  
})();