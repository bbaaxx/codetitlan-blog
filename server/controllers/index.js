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

  // es: Rendereo del template pasando referencia a los parciales.
  // en: Render the template passing partials references.
  res.render('index',{
    // This sux a little !
    partials: {
      head:'partials/head',
      tail:'partials/tail'
    }
  });

};
