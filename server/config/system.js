'use strict';

// es: Usamos la librería lodash por que es divertido
// en: Let's use lodash just for fun
var _ = require('lodash');

// es: Integramos la configuración en all.js con la configuración
//     especifica del entorno
// en: Extend the configuration in all.js with the environment
//     specific configuration
module.exports = _.extend(
    require(__dirname + '/../config/env/all.js'),
    require(__dirname + '/../config/env/' + process.env.NODE_ENV ) || {}
);
