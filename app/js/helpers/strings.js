/*
 * /helpers/strings.js
 */

Ember.Handlebars.helper('capitalize', function(value, options) {
  return (value && typeof value === 'string') ?
    value.charAt(0).toUpperCase() + value.slice(1) :
    '';
});

Ember.Handlebars.helper('lowercase', function(value, options) {
  return (value && typeof value === 'string') ?
    value.toLowerCase() :
    '';
});
