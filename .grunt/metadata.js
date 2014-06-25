/*
 * /.grunt/metadata.js
 */
'use strict';

module.exports = function(grunt,options) {
  // console.log(options.package);
  return {

    banner: '/*! <%= package.title || package.name %> - v<%= package.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= package.homepage ? "* " + package.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= package.author.name %>;' +
      ' License: <%= package.license %> */\n',
    gruntfile: {
      src: 'Gruntfile.js'
    }

  }
};
