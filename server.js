'use strict';

/*
 * es: Dependencias | en: Module dependencies
 */

var express = require('express');

// TODO
// es: Importamos 'util' temporalmente para utilizar inspect en debug.
// en: Temporarily import 'util' here to use inspect for debugging.
var util = require('util');

/*
 * es: Archivo de entrada para el servidor.
 * en: Main server entry file
 */

// es: Establece el entorno como "development" si no ha sido definido
// en:  Set default node environment to development if not set before
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// es: Importar variables de configuraciones del sistema
// en: Import system config variables
var config = require('./server/config/system');
// es: Iniciar conexión a base de datos e inicializar modelos
// en: Initi database connection and bootstrap models
// ************    TODO    ************

// es: Configuración de la aplicación de express
// en: Configure express app
var app = express();
// TODO: This next two calls can and should be improved
// es: Pasar la aplicación a la función de configuración
// en: Pass the app object to the config function
require('./server/config/express')(app);

// es: Pasar la aplicación a la función de configuración de rutas
// en: Pass the app object to the route config function
// TODO: This has to run last before starting the server but I really don't
//       like it to be in here.
require('./server/routes')(app);

// es: Iniciar el servidor
// en: Start server
app.listen(config.port, config.ipaddr, function () {
  console.log(
  'Express server listening on http://%s:%d, in %s mode', 
  config.host, 
  config.port, 
  app.get('env')
  );
});

// es: Exponer app
// en: Expose app
// TODO: Figure out what the hell is this for ... my guess is that the tests
//       require this but the server works just fine without it.
exports = module.exports = app;