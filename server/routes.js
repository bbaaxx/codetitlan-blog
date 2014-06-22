'use strict';

//es: Aqui se importan los controladores
//en: Importing controllers here
var api = require('./controllers/api'),
    index = require('./controllers/index'),
    sandbox = require('./controllers/sandbox'); //,
    // users = require('./controllers/users'),
    // session = require('./controllers/session'),
    // middleware = require('./middleware');

/**
 * es: Rutas del servidor
 * en: Server routes
 */
module.exports = function(app) {
  // // API Routes
  // app.route('/api/awesomeThings')
  //   .get(api.awesomeThings);
  // app.route('/api/users')
  //   .post(users.create)
  //   .put(users.changePassword);
  // app.route('/api/users/me')
  //   .get(users.me);
  // app.route('/api/users/:id')
  //   .get(users.show);
  // app.route('/api/session')
  //   .post(session.login)
  //   .delete(session.logout);
  // // All undefined api routes should return a 404
  // app.route('/api/*')
  //   .get(function(req, res) {
  //     res.send(404);
  //   });

  // // All other routes to use Angular routing in app/scripts/app.js
  // app.route('/partials/*')
  //   .get(home.partials);
  app.route('/sandbox*').get( sandbox.index );
  app.route('/*')
    //.get( middleware.setUserCookie, index.index);
    .get( index.index );
};