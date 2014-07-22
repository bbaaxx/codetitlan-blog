/*
 * server/config/env/all.js
 */
 'use strict';

/*
 * es: Dependencias | en: Module dependencies
 */
 // null

module.exports = {
  root: require('path').normalize(__dirname + '/../../..'),
  templateEngines: ['hogan'],
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },
  sessionSecret: 'There is no coincidence, only hitzusen - Yukko',
  sessionCookie: {
   path: '/',
   httpOnly: true,
    // If secure is set to true then it will cause the cookie to be set
    // only when SSL-enabled (HTTPS) is used, and otherwise it won't
    // set a cookie. 'true' is recommended yet it requires the above
    // mentioned pre-requisite.
    secure: false,
    // Only set the maxAge to null if the cookie shouldn't be expired
    // at all. The cookie will expunge when the browser is closed.
    maxAge: null
  },

  // The session cookie name
  sessionName: 'codetitlan.sid'

};
