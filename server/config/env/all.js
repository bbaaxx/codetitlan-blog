'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/../../..');
module.exports = {
    root: rootPath,
    port: process.env.PORT || 9000,
    hostname: process.env.HOSTNAME || 'localhost',
    ipaddr: process.env.IP || '0.0.0.0',
    host: process.env.HOST || 'localhost',
    dbType: 'none yet',
    templateEngine: 'ejs'
};
