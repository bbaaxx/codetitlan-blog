/*
 * server/config/env/development.js
 */
 'use strict';

module.exports = {

  env: 'development',
  app: {
      name: 'Codetitilan Application Server - (Development)'
  },
  port: process.env.PORT || 9000,
  hostname: process.env.HOSTNAME || 'localhost',
  ipaddr: process.env.IP || '0.0.0.0',
  host: process.env.HOST || 'localhost',
  mongo: {
  	uri: 'mongodb://localhost/codetitlan-blog-dev'
  }

};
