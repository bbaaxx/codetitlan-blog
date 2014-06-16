'use strict';

module.exports = {
  port: process.env.OPENSHIFT_INTERNAL_PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
  hostname: process.env.HOSTNAME || 'localhost',
  process.env.OPENSHIFT_INTERNAL_IP || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
  host: process.env.HOST || 'localhost',
  dbType: 'none yet',
  templateEngine: 'ejs'
};
