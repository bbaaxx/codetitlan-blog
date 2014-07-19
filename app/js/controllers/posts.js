/*
 * /controllers/posts.js
 */

(function(){
  'use strict';

  App.PostsController = Ember.ArrayController.extend({
    postsCount: function(){
      return this.get('model.length');
    }.property('@each'),
    sortProperties: ['creationDate'],
    sortAscending: true // false = descending
  });

  App.PostsCreateController = Ember.ObjectController.extend({
    actions: {
      save: function(){
        // just before saving, we set the creationDate
        this.get('model').set('creationDate', new Date());
        this.get('model').save();
        // redirects to the post itself
        this.transitionToRoute('post', this.get('model'));
      }
    }
  });

  App.PostController = Ember.ObjectController.extend({
    deleteMode: false,
    actions: {
      edit: function(){
        this.transitionToRoute('post.edit');
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
        this.transitionToRoute('posts');
      }
    }
  });

  App.PostEditController = Ember.ObjectController.extend({
    actions: {
      save: function(){
        var post = this.get('model');
        // this will tell Ember-Data to save/persist the new record
        post.save();
        // then transition to the current post
        this.transitionToRoute('post', post);
      }
    }
  });
  

})();
