'use strict';

// Stuff to test Hogan templates
var lotsOfShits = {
  // Stuff for single variables
  eVariable: '<i>call me escaped</i>',
  uVariable: '<i>call me unscaped</i>',
  // Stuff for the collection
  aCollection: [
  { item: 'This is item one'  },
  { item: 'This is item two'  },
  { item: 'This is item three'}
  ],
  // Stuff for the lambda
  disDude: 'Bax',
  lambdy: function(){
    return function(stuff) {
      return '<b>'+stuff+'</b>';
    };
  },
  jsonToString: function() {
    return function(stuff) {
      return JSON.stringify(stuff);
    };
  },
  // Stuff for Non-falsy values
  duDu: { content: 'doo!' },
  // Stuff for inverted sections
  thisIsFalse: false,
  // Just a fun var to test the delimiter change
  forNewDelims: 'fucking awful!',
  forUnscapedNewDelims: '<i>really shitty</i>'
};

/**
 * Send our single page app
 */
exports.index = function(req, res) {

  var incPartials = {
    login      : 'sandbox/loginfrm',
    'hogan_test'  : 'sandbox/hogan_test',
    dudu          : 'sandbox/dudu'
  };
  var passUser = req.user ? {
    name: req.user.name,
    _id: req.user._id,
    username: req.user.username,
    roles: req.user.roles
  } : {};
  var sess = req.session;

  // es: Rendereo del template pasando referencia a los parciales.
  // en: Render the template passing partials references.
  res.render('sandbox',{
    appTitle: 'Codetitlan, estamos jugando',
    // You have to declare the partials here which sucks a little bit
    partials: incPartials,
    // Passing the object we created up there
    mst: lotsOfShits,
    // passing some of the stuff of the user object to the view
    user: JSON.stringify(passUser),
    sess: JSON.stringify(sess)
  });
};
