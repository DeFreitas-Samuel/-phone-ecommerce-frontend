import {Router} from "@angular/router";
import {AuthService} from "../services";
import {inject} from "@angular/core";

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.currentLoggedUser) {
    return true;
  }

  // Redirect to the login page
  return router.parseUrl('/login');
};
