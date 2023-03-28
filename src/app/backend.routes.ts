
const API_HOST = 'localhost:8000';

export const BACKEND_ROUTES = {
  base: `http://${API_HOST}`,
  auth: {
      login: '/login',
      logout: '/logout',
      register: '/api/register',
      csrf: '/sanctum/csrf-cookie',
  },

/*  users: {
    list: '/api/users',
    create: '/api/users/create',
    update: (id: number) => `/api/users/${id}/update`,
    delete: (id: number) => `/api/users/${id}/delete`,
  },*/
};





export type RouteType = typeof BACKEND_ROUTES
