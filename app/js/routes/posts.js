/*
 * /routes/posts.js
 */

(function(){
  'use strict';


  App.PostsRoute = Ember.Route.extend({
    model: function(){
      return this.store.find('post');
    }
  });

  App.PostsCreateRoute = Ember.Route.extend({
    model: function(){
      // the model for this route is a new empty Ember.Object
      return this.store.createRecord('post');
    },
    // in this case (the create route), we can reuse the post/edit template
    // associated with the usersCreateController
    renderTemplate: function(){
      this.render('post.edit', {
        controller: 'postsCreate'
      });
    }
  });


})();
