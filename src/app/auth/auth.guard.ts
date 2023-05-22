import {Router} from "@angular/router";
import {AuthService} from "../services";
import {inject} from "@angular/core";

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  let isLoggedIn:Boolean = false;
  
  authService.loggedInUser.subscribe(user=> {
    isLoggedIn = !!user
  })


  if (isLoggedIn) {
    console.log('Authenticated')
    return true;
  }


  console.log('Not Authenticated')
  return router.parseUrl('/login');
};
