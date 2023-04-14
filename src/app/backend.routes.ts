
const API_HOST = 'localhost:8000';

export const BACKEND_ROUTES = {
  base: `http://${API_HOST}`,
  auth: {
      login: '/login',
      logout: '/logout',
      register: '/api/register',
      csrf: '/sanctum/csrf-cookie',
  },
  sandbox: {
    testSession: '/session'
  }


};





export type RouteType = typeof BACKEND_ROUTES
