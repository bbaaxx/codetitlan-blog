'use strict';

//es: Aqui se importan los controladores
//en: Importing controllers here
var sandbox = require('../controllers/sandbox');

/**
 * es: Rutas del servidor
 * en: Server routes
 */
module.exports = function(app) {

  app.route('/sandbox').get( sandbox.index );
  
};