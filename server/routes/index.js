'use strict';

module.exports = function(app) {

  //es: Aqui se importan los controladores
  //en: Importing controllers here
  var index = require('../controllers/index');
  
  app.route('/')
    //.get( middleware.setUserCookie, index.index);
    .get( index.render );

};