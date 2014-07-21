/*
 * router.js
 */

(function(){
  'use strict';


  App.Router.map(function(){

    this.route('index', { path: '/' });

    this.resource('sess', function() {
      this.route('signup');
      this.route('signin');
      this.route('signout');
    });

    this.resource('posts', function() {
      this.resource('post', {path:'/:post_id'}, function() {
        this.route('edit');
      });
      this.route('create');
    });

    this.resource('dudes', function() {
      this.resource('dude', {path:'/:dude_id'}, function() {
        this.route('edit');
      });
      this.route('create');
    });


  });


})();
