
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
  },
  products: {
    products: '/api/products',
    product: '/api/product'
  },
  purchase: {
    purchase: '/api/purchase'
  }


};





export type RouteType = typeof BACKEND_ROUTES
