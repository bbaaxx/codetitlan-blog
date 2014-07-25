/*
 * /controllers/users.js
 */

(function(){
  'use strict';

  /*
  App.SessController = Ember.ArrayController.extend({


    usersCount: function(){
      return this.get('model.length');
    }.property('@each'),
    sortProperties: ['name'],
    sortAscending: true // false = descending
  });

  App.SessSignupController = Ember.ObjectController.extend({
    actions: {
      save: function() {
        // this.get('model').save();
        // this.transitionToRoute('signin');
      }
    }
  });

  App.SessSigninController = Ember.ObjectController.extend({
    content: {},
    needs: ['application'],
    actions: {
      signin: function() {
        var self = this;
        Ember.$.post('/signin', this.getProperties('email','password'))
          .then(function(response) {
            window.user = response.user;
            self.get('controllers.application').set('user', response.user);
            self.get('controllers.application').set('user.auth', true);
            self.transitionToRoute('index');

          });
      }
    }
  });*/







  /*
  App.SessCreateController = Ember.ObjectController.extend({
    actions: {
      save: function(){
        // just before saving, we set the creationDate
        this.get('model').set('creationDate', new Date());
        this.get('model').save();
        // redirects to the user itself
        this.transitionToRoute('user', this.get('model'));
      }
    }
  });

  App.UserController = Ember.ObjectController.extend({
    deleteMode: false,
    actions: {
      edit: function(){
        this.transitionToRoute('user.edit');
      },
      delete: function() {
        this.toggleProperty('deleteMode');
      },
      cancelDelete: function(){
        // set deleteMode back to false
        this.set('deleteMode', false);
      },
      confirmDelete: function(){
        this.get('model').deleteRecord();
        this.get('model').save();
        this.set('deleteMode', false);
        this.transitionToRoute('users');
      }
    }
  });

  App.UserEditController = Ember.ObjectController.extend({
    actions: {
      save: function(){
        var user = this.get('model');
        // this will tell Ember-Data to save/persist the new record
        user.save();
        // then transition to the current user
        this.transitionToRoute('user', user);
      }
    }
  });*/

})();
