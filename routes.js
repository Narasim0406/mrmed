
const nextRoutes = require('next-routes')

const routes = (module.exports = nextRoutes())

routes.add('home', '/');

routes.add('registration', '/registration');

routes.add('about', '/about');

routes.add('login', '/login');

