/*
 * server/config/env/test.js
 */
 'use strict';

module.exports = {
  env: 'test',
  app: {
      name: 'Codetitilan Application Server & Backend - (Development)'
  },
  port: process.env.PORT || 9000,
  hostname: process.env.HOSTNAME || 'localhost',
  ipaddr: process.env.IP || '0.0.0.0',
  host: process.env.HOST || 'localhost',
  mongo: {
  	uri: 'mongodb://localhost/codetitlan-blog-test'
  }
};
