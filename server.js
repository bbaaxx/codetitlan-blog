/*
 * server.js
 */
'use strict';

/*
 * es: Dependencias | en: Module dependencies
 */
var mongoose = require('mongoose');

// es: Establece el entorno como "development" si no ha sido definido
// en:  Set default node environment to development if not set before
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// es: Importar variables de configuraciones del sistema
// en: Import system config vars
var config = require('./server/config/config');

// es: Iniciar conexión a base de datos
// en: Init database connection
mongoose.connect(config.mongo.uri, config.mongo.options);
var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'Could not connect to DB.\n'));

// es: Inicializar Modelos, Rutas y la app como una aplicación express
// en: Bootstrap Models, Dependencies, Routes and the app as an express app
var app = require('./server/config/bootstrap')();

// es: Configurar manejo de señales y terminadores para Openshift
// en: Setup terminators and signal handler for Openshift
// TODO - Fix this so it triggers exclusively when hosted in Openshit
if (process.env.NODE_ENV === 'production') {
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
exports = module.exports = app;
