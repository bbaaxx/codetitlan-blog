/*
 * /routes/sess.js
 */

(function(){
  'use strict';

  App.SessRoute = Ember.Route.extend({
    //
  });

  App.SessSignupRoute = Ember.Route.extend({
    model: function(){
      return this.store.createRecord('signup');
    },
    renderTemplate: function() {
      this.render('users.signup', {
        controller: 'usersSignup'
      });
    }
  });

})();
