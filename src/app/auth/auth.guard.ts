import {Router} from "@angular/router";
import {AuthService} from "../services";
import {inject} from "@angular/core";

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);


  console.log(authService.currentLoggedUser);
  if (authService.isAuthenticated()) {
    console.log('Authenticated')
    return true;
  }


  console.log('Not Authenticated')
  return router.parseUrl('/login');
};
