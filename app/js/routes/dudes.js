/*
 * /routes/dudesRoute.js
 */

(function(){
  'use strict';

  App.Router.map(function(){

    this.resource('dudes', function() {
      this.resource('dude', {path:'/:dude_id'}, function() {
        this.route('edit');
      });
      this.route('create');
    });

  });

  App.DudesRoute = Ember.Route.extend({
    model: function(){
      return this.store.find('dude');
    }
  });

  App.DudesCreateRoute = Ember.Route.extend({
    model: function(){
      // the model for this route is a new empty Ember.Object
      return this.store.createRecord('dude');
    },

    // in this case (the create route), we can reuse the dude/edit template
    // associated with the usersCreateController
    renderTemplate: function(){
      this.render('dude.edit', {
        controller: 'dudesCreate'
      });
    }
  });

})();
