/*
 * server/config/env/test.js
 */
 'use strict';

var dbHost = process.env.WERCKER_MONGODB_HOST || 'localhost';

module.exports = {
  env: 'test',
  app: {
      name: 'Codetitilan Application Server & Backend - (Testing)'
  },
  port: 9696,
  hostname: process.env.HOSTNAME || 'localhost',
  ipaddr: process.env.IP || '0.0.0.0',
  host: process.env.HOST || 'localhost',
  mongo: {
  	uri: 'mongodb://'+dbHost+'/codetitlan-blog-test'
  }
};
