/*
 * /routes/usersRoute.js
 */

(function(){
  'use strict';

  App.UsersRoute = Ember.Route.extend({
    model: function(){
      return this.store.find('user');
    }
  });

})();