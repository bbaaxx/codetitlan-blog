/*
 * /.grunt/metadata.js
 */

module.exports = function(grunt,options){
  return {
    pkg: options.package,
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    gruntfile: {
      src: 'Gruntfile.js'
    }
  }

};

console.log(options);