'use strict';

exports.render = function(req, res) {

  var userViewObj = req.user ? {
    name: req.user.name,
    _id: req.user._id,
    username: req.user.username,
    roles: req.user.roles
  } : {};

  
  // es: Rendereo del template.
  // en: Render the template.
  res.render('index', {
    appTitle: 'Codetitlan, estamos pensando',
    user: JSON.stringify(userViewObj)
  });

};
