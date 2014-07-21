/*
 * store.js
 */

(function(){
  'use strict';

  // The fixture adapter allows for static data to be provided
  // along with the model for testing
  // App.ApplicationAdapter = DS.FixtureAdapter;

  // The local storage adapter uses the browser local storage facilities
  // App.ApplicationAdapter = DS.LSAdapter;

  // The REST adapter (the final configuration)
  // App.ApplicationAdapter = DS.RESTAdapter;

  // This is a temporal configuarion during stabilization of auth
  App.ApplicationAdapter = DS.LSAdapter;
  App.UserAdapter = DS.RESTAdapter;


})();
