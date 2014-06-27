'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/../../..');
module.exports = {
  root: rootPath,
  dbType: 'none yet',
  templateEngines: ['hogan'],
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  }
};