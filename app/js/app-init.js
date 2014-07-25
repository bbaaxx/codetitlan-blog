/*
 * app-init.js
 */

(function(){
  'use strict';

  window.App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_ACTIVE_GENERATION: true,
	LOG_VIEW_LOOKUPS: true
  });

})();