/*
 * /routes/index.js
 */

(function(){
  'use strict';

  App.IndexRoute = Ember.Route.extend({

    setupController: function(controller) {
      // Set the IndexController's `title`
      controller.set('title', "Codetitlan");
    }
    
  });

})();