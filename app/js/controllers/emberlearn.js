/*
 * /controllers/emberlearn.js
 */

(function(){
  'use strict';

  App.EmberlearnController = Ember.Controller.extend({

    // For fullName computed property
    firstName: "Bender",
    lastName: "Rito",
    fullName: function(){
      return this.get('firstName') + ' ' + this.get('lastName');
    }.property('firstName', 'lastName'),
    // Observer that runs on init
    fullNameChanged: function() {
      console.log('observer for fullName triggered');
    }.observes('fullName').on('init'),
    
    // For Handlebars iterations and conditionals
    dudes: ['Dudly Doo','Dubity Doo','Dubbie Dlue' ],
    dudlies: {
      d1: 'Dudly Doo',
      d2: 'Dubity Doo',
      d3: 'Dubbie Dlue'
    },
    someUrl: 'http://someurl.com'

  });

})();