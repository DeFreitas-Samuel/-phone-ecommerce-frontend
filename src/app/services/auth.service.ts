import { HttpClient } from '@angular/common/http';
import { BACKEND_ROUTES } from "../backend.routes";
import { UserRegistrationDataDTO } from "../DTOs/UserRegistrationDataDTO";
import { Injectable } from "@angular/core";
import { UserLoginDataDTO } from "../DTOs/UserLoginDataDTO";
import { switchMap, tap, EMPTY  } from 'rxjs';
import {JsonTokenInterface} from "../interfaces/jsonToken.interface";
import {UserInterface} from "../interfaces/user.interface";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentLoggedUser!: UserInterface|null;

  public constructor(private http: HttpClient, private router: Router) {

  }
  public signUp(User: UserRegistrationDataDTO) {

    return this.http.post<JsonTokenInterface>(`${BACKEND_ROUTES.base}${BACKEND_ROUTES.auth.register}`, User, { withCredentials: true })
      .pipe(
        tap(this.setAuthorizedUser())
      )
  }
  public login(User: UserLoginDataDTO) {


    return this.http.post<JsonTokenInterface>(`${BACKEND_ROUTES.base}${BACKEND_ROUTES.auth.login}`, User, { withCredentials: true })
      .pipe(
        tap(this.setAuthorizedUser())
      );

  }

  private setAuthorizedUser() {
    return (response:JsonTokenInterface) => {
      if (response.access_token) {
        localStorage.setItem('access_token', response.access_token);
        this.currentLoggedUser = response.user;

        this.router.navigate(['home']);
      }
    };
  }


  public logout() {
    return this.http.post(`${BACKEND_ROUTES.base}${BACKEND_ROUTES.auth.logout}`, { withCredentials: true })
      .pipe(
        tap( () => {
          localStorage.removeItem("access_token");
          this.currentLoggedUser = null;
        })
    )
  }
}
