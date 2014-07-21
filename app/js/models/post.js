/*
 * models/dude.js
 */

(function(){
  'use strict';


  App.Post = DS.Model.extend({

    title         : DS.attr(),
    type          : DS.attr(),
    postContent   : DS.attr(),
    tags          : DS.attr(),
    creationDate  : DS.attr()

  });

  App.Post.FIXTURES = [
    {
      id: 1,
      title: 'Test post number : 1',
      type: 1,
      postContent: 'Echo Park beard Godard, sustainable put a bird on it kogi gastropub kitsch. +1 tattooed next level, you probably haven\'t heard of them Brooklyn ethnic PBR XOXO whatever.',
      tags: ['hipster', 'kitsch'],
      creationDate: 'Mon, 26 Aug 2013 20:23:43 GMT'
    }, {
      id: 2,
      title: 'Test post number : 2',
      type: 1,
      postContent: 'Biscuit gingerbread marshmallow soufflé marzipan. Chocolate cake sesame snaps chocolate cake dessert danish marzipan sweet. Bonbon gummies unerdwear.com chocolate bar muffin wafer chupa chups sesame snaps.',
      tags: ['cupcake', 'chocolate'],
      creationDate: 'Mon, 26 Aug 2013 20:23:43 GMT'
    }, {
      id: 3,
      title: 'Test post number : 3',
      type: 1,
      postContent: 'You were only supposed to blow the bloody doors off. you re only supposed to blow the bloody doors off! jasper: your baby is the miracle the whole world has been waiting for.',
      tags: ['dafuq', 'supposed'],
      creationDate: 'Mon, 26 Aug 2013 20:23:43 GMT'
    }, {
      id: 4,
      title: 'Test post number : 4',
      type: 1,
      postContent: ' Pellentesque its fo rizzle tortor. Sed eros. The bizzle izzle dolor crazy check it out tempizzle shiznit. Maurizzle bizzle nibh et turpizzle. Shizzlin dizzle izzle tortor. ',
      tags: ['gangsta', 'fizzle'],
      creationDate: 'Mon, 26 Aug 2013 20:23:43 GMT'
    }
  ];

})();
