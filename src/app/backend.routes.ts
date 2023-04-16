
const API_HOST = 'localhost:8000';

export const BACKEND_ROUTES = {
  base: `http://${API_HOST}`,
  auth: {
      login: '/api/login',
      logout: '/api/logout',
      register: '/api/register',
      csrf: '/sanctum/csrf-cookie',
  },
  sandbox: {
    testSession: '/api/session'
  }


};





export type RouteType = typeof BACKEND_ROUTES
