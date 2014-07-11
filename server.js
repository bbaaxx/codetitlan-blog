/*
 * server.js
 */
'use strict';

/*
 * es: Dependencias | en: Module dependencies
 */
var mongoose = require('mongoose'),
    passport = require('passport');


// es: Establece el entorno como "development" si no ha sido definido
// en:  Set default node environment to development if not set before
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// es: Importar variables de configuraciones del sistema
// en: Import system config variables
var config = require('./server/config/config');

// es: Iniciar conexión a base de datos e inicializar modelos
// en: Initi database connection and bootstrap models
mongoose.connect(config.mongo.uri, config.mongo.options);
var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'Could not connect to MongoDB. **\n'));

// es: Inicializar Modelos, Rutas y la app como una aplicación express
// en: Bootstrap Models, Dependencies, Routes and the app as an express app
var app = require('./server/config/bootstrap')(passport);

// es: Configurar manejo de señales y terminadores para Openshift
// en: Setup terminators and signal handler for Openshift
// TODO - Fix this so it triggers exclusively when hosted in Openshit
if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
  config.terminatorHandlers();
}

// es: Iniciar el servidor
// en: Start server
conn.once('open', function() {
  app.listen(config.port, config.ipaddr, function () {
    console.log(
    'Express server listening on http://%s:%d, in %s mode', 
    config.host, 
    config.port, 
    app.get('env')
    );
  });
});


// es: Exponer app
// en: Expose app
// TODO: Figure out what the hell is this for ... my guess is that the tests
//       require it but the server works just fine without.
exports = module.exports = app;