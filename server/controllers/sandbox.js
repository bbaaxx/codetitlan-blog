'use strict';

// var path = require('path');

/**
 * Send partial, or 404 if it doesn't exist
 */
// exports.partials = function(req, res) {
//   var stripped = req.url.split('.')[0];
//   var requestedView = path.join('./', stripped);
//   res.render(requestedView, function(err, html) {
//     if(err) {
//       console.log("Error rendering partial '" + requestedView + "'\n", err);
//       res.status(404);
//       res.send(404);
//     } else {
//       res.send(html);
//     }
//   });
// };

/**
 * Send our single page app
 */
exports.index = function(req, res) {

  // Stuff to test Hogan templates
  res.locals.mst = {
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
    // Stuff for Non-falsy values
    duDu: { content: 'doo!' },
    // Stuff for inverted sections
    thisIsFalse: false,
    // Just a fun var to test the delimiter change
    forNewDelims: 'fucking awful!',
    forUnscapedNewDelims: '<i>really shitty</i>'
  };

  // es: Rendereo del template pasando referencia a los parciales.
  // en: Render the template passing partials references.
  res.render('sandbox',{
    // This sux a little !
    partials: {
      hogan_test:'sandbox/hogan_test',
      dudu:'sandbox/dudu'
    }
  });

};
