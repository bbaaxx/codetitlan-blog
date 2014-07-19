/*
 * models/user.js
 */
(function(){
  'use strict';

  var attr = DS.attr;

  App.User = DS.Model.extend({

    name: attr(),
    username: attr(),
    email: attr(),
    hashedPassword: attr(),
    provider: attr(),
    roles: attr()

  });

  App.Signup = DS.Model.extend({

    name: attr(),
    username: attr(),
    email: attr(),
    password: attr(),
    confirmPassword: attr()

  });


  // Fixtures
  App.User.FIXTURES = [
    {
      'id': 1,
      'name':'Test User One',
      'username':'test1',
      'email':'test1@codetitlan.com',
      'hashedPassword':'u4CET4QCj91FfroE0Vjgv2P39am/cVD9vDxfPsCZ+BQx4OlZACL9qXSbjd7CiTe1+gtPGtoYa79fqjASBGq2fg ==',
      "salt":'Mw0CByypuPe+gbPvVNHgWA==',
      'provider':'local',
      'roles':['authenticated']
    }
  ];


})();
