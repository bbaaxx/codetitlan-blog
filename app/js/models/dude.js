/*
 * models/dude.js
 */

(function(){
  'use strict';

  App.Dude = DS.Model.extend({
    name         : DS.attr(),
    email        : DS.attr(),
    bio          : DS.attr(),
    avatarUrl    : DS.attr(),
    creationDate : DS.attr()
  });

  App.Dude.FIXTURES = [
    {
      id: 1,
      name: 'Sponge Bob',
      email: 'bob@sponge.com',
      bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
      avatarUrl: 'http://jkneb.github.io/ember-crud/assets/images/avatars/sb.jpg',
      creationDate: 'Mon, 26 Aug 2013 20:23:43 GMT'
    },{
      id: 2,
      name: 'John David',
      email: 'john@david.com',
      bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
      avatarUrl: 'http://jkneb.github.io/ember-crud/assets/images/avatars/jk.jpg',
      creationDate: 'Fri, 07 Aug 2013 10:10:10 GMT'
    },{
      id: 3,
      name: 'Pink Panther',
      email: 'pp@pink.com',
      bio: 'I am is the main and title character in the opening and closing credit sequences of every film in The Pink Panther series except for A Shot in the Dark and Inspector Clouseau. My popularity spawned a series of theatrical shorts, merchandise, a comic book, and television cartoons. I starred 124 short films, 10 television shows and three prime time specials.',
      avatarUrl: 'https://i1.sndcdn.com/avatars-000045902916-jja4t7-t200x200.jpg?30a2558',
      creationDate: '2014-07-18T05:48:54.387'
    }
  ];

})();
    
