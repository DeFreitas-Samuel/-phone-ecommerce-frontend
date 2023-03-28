import { InjectionToken } from "@angular/core";
import { BACKEND_ROUTES } from "../backend.routes";

export const ROUTES = new InjectionToken<typeof BACKEND_ROUTES>(
    "The routes utilized for backend",
{
    factory: () => BACKEND_ROUTES
})