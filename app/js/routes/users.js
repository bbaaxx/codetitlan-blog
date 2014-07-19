/*
 * /routes/users.js
 */

(function(){
  'use strict';

  App.UsersRoute = Ember.Route.extend({
    // 
  });

  App.UsersSignupRoute = Ember.Route.extend({
    model: function(){
      // the model for this route is a new empty Ember.Object
      return this.store.createRecord('signup');
    },
    renderTemplate: function() {
      this.render('users.signup', {
        controller: 'usersSignup'
      });
    }
  });

  App.UsersSigninRoute = Ember.Route.extend({
    renderTemplate: function(){
      this.render('users.signin', {
        controller: 'usersSignin'
      });
    }
  });
/*

  App.UsersSignupRoute = Ember.Route.extend({
    model: function(){
      // the model for this route is a new empty Ember.Object
      return this.store.createRecord('signup');
    },

    // in this case (the create route), we can reuse the dude/edit template
    // associated with the usersCreateController
    renderTemplate: function(){
      this.render('user.edit', {
        controller: 'usersSignup'
      });
    }
  });
*/
})();
