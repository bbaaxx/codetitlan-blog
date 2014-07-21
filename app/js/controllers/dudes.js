/*
 * /controllers/dudes.js
 */

(function(){
  'use strict';

  App.DudesController = Ember.ArrayController.extend({
    dudesCount: function(){
      return this.get('model.length');
    }.property('@each'),
    sortProperties: ['name'],
    sortAscending: true // false = descending
  });

  App.DudesCreateController = Ember.ObjectController.extend({
    actions: {
      save: function(){
        // just before saving, we set the creationDate
        this.get('model').set('creationDate', new Date());
        this.get('model').save();
        // redirects to the dude itself
        this.transitionToRoute('dude', this.get('model'));
      }
    }
  });

  App.DudeController = Ember.ObjectController.extend({
    deleteMode: false,
    actions: {
      edit: function(){
        this.transitionToRoute('dude.edit');
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
        this.transitionToRoute('dudes');
      }
    }
  });

  App.DudeEditController = Ember.ObjectController.extend({
    actions: {
      save: function(){
        var dude = this.get('model');
        // this will tell Ember-Data to save/persist the new record
        dude.save();
        // then transition to the current dude
        this.transitionToRoute('dude', dude);
      }
    }
  });

})();
