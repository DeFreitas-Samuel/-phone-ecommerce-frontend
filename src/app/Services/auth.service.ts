import { HttpClient } from '@angular/common/http';
import { BACKEND_ROUTES } from "../backend.routes";
import { UserRegistrationDataDTO } from "../DTOs/UserRegistrationDataDTO";
import { Injectable } from "@angular/core";
import { UserLoginDataDTO } from "../DTOs/UserLoginDataDTO";
import { switchMap, tap, EMPTY  } from 'rxjs';
import {JsonTokenInterface} from "../Interfaces/jsonToken.interface";
import {UserInterface} from "../Interfaces/user.interface";

@Injectable()
export class AuthService {
  currentLoggedUser!: UserInterface;

  public constructor(private http: HttpClient) {

  }
  public signUp(User: UserRegistrationDataDTO) {

    return this.http.post<JsonTokenInterface>(`${BACKEND_ROUTES.base}${BACKEND_ROUTES.auth.register}`, User, { withCredentials: true })
      .pipe(
        tap((response) => {
          if (response.access_token && response.user) {
            localStorage.setItem('access_token', response.access_token);
            this.currentLoggedUser = response.user;

          }
        }),
        switchMap( () => {
          console.log(this.currentLoggedUser)
          return EMPTY;
        })
      )
  }
  public login(User: UserLoginDataDTO) {


    return this.http.post<JsonTokenInterface>(`${BACKEND_ROUTES.base}${BACKEND_ROUTES.auth.login}`, User, { withCredentials: true })
      .pipe(
        tap((response) => {
          if (response.access_token) {
            localStorage.setItem('access_token', response.access_token);
          }
        })
      );

  }

  private getCSRFTokenFromLaravel() {
    return this.http.get(`${BACKEND_ROUTES.base}${BACKEND_ROUTES.auth.csrf}`, { withCredentials: true })
  }

  public logout() {
    return this.http.post(`${BACKEND_ROUTES.base}${BACKEND_ROUTES.auth.logout}`, { withCredentials: true })
      .pipe(
        tap( () => {
          localStorage.removeItem("access_token");
        })
    )
  }
}
