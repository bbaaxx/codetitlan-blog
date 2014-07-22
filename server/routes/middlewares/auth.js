/*
 * server/middleware.js
 */

 'use strict';

/**
 * Custom middleware used by the application
 */
// module.exports = {

  /**
   *  Protect routes on your api from unauthenticated access
   */
  // auth: function auth(req, res, next) {
  //   if (req.isAuthenticated()) return next();
  //   res.send(401);
  // },

  /**
   * Set a cookie for angular so it knows we have an http session
   */
  // setUserCookie: function(req, res, next) {
  //   if(req.user) {
  //     res.cookie('user', JSON.stringify(req.user.userInfo));
  //   }
  //   next();
  // }
// };

/**
* Generic require login routing middleware
*/
exports.requiresLogin = function(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

/**
* Generic require Admin routing middleware
* Basic Role checking - future release with full permission system
*/
exports.requiresAdmin = function(req, res, next) {
    if (!req.isAuthenticated() || !req.user.hasRole('admin')) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

exports.setUserCookie = function(req, res, next) {
  if(req.user) {
    res.cookie('user', JSON.stringify(req.user.userInfo));
  }
  next();
};
