/*
 * /.grunt/clean.js
 */
'use strict';

module.exports = function(grunt,options) {
  return {

    options: {
      reporter: require('jshint-stylish'),
      jshintrc: '.jshintrc'
    },
    server: {
      options: {
        force: true,
        //jshintrc: 'server/.jshintrc'
        ignores: ['app/js/templates.js']
      },
      src: [
        'server/{,*/}*.js',
        'server.js'
      ]
    },
    client: {
      options: {
        jshintrc: 'app/js/.jshintrc',
        ignores: ['app/js/templates.js']
      },
      src: [
        'app/js/{,*/}*.js'
      ],
    },
    test: {
      options: {
        jshintrc: 'test/client/.jshintrc'
      },
      src: ['test/client/spec/{,*/}*.js']
    }

  }
};
