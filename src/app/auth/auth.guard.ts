import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../services";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";


@Injectable()
export class CanActivateIfLoggedIn implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const isLoggedIn: Boolean = !!this.authService.loggedInUserSnapshot;
    console.log(state.url);

    if (state.url === '/login' || state.url === '/signup') {
      if (isLoggedIn) {
        this.router.navigate(['/']);
        return false;
      }
    }else if(!isLoggedIn){
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

}

