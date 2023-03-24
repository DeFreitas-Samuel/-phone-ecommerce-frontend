export class BackendRoutes {
    static readonly API_URL = 'http://localhost:8000';
    static readonly API_SIGNUP = this.API_URL + '/api/register';

}

export const BACKEND_ROUTES = {
    API_URL:'',
    API_SIGNUP: ''
} as const



export type RouteType = typeof BACKEND_ROUTES