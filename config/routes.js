/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'POST /student': { action: 'Student/create' },
  'GET /student': { action: 'Student/find' },
  'GET /student/:id': { action: 'Student/findOne' },
  'PUT /student/:id': { action: 'Student/update' },
  'DELETE /student/:id': { action: 'Student/delete' },
  'POST /room': { action: 'Room/create' },
  'GET /room': { action: 'Room/find' },
  'GET /room/:id': { action: 'Room/findOne' },
  'PUT /room/:id': { action: 'Room/update' },
  'DELETE /room/:id': { action: 'Room/delete' },
  'POST /login': { action: 'Auth/login' },
  'POST /loginJWT': { action: 'Auth/loginJWT' },

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/
};
