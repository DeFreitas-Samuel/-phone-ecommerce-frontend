import { HttpClient } from '@angular/common/http';
import { BACKEND_ROUTES } from "../backend.routes";
import { UserRegistrationDataDTO } from "../DTOs/UserRegistrationDataDTO";
import { Injectable } from "@angular/core";
import { UserLoginDataDTO } from "../DTOs/UserLoginDataDTO";
import { switchMap, tap } from 'rxjs';
import {JsonTokenInterface} from "../Interfaces/jsonToken.interface";

@Injectable()
export class AuthService {


  public constructor(private http: HttpClient) {

  }
  public signUp(User: UserRegistrationDataDTO) {
    return this.getCSRFTokenFromLaravel().pipe(
      tap(() => console.log(User)),
      switchMap(() => this.http.post(`${BACKEND_ROUTES.base}${BACKEND_ROUTES.auth.register}`, User, { withCredentials: true }))
    )
  }
  public login(User: UserLoginDataDTO) {
    // return this.getCSRFTokenFromLaravel().pipe(
    //   tap(() => console.log(User)),
    //   switchMap(() =>this.http.post(`${BACKEND_ROUTES.base}${BACKEND_ROUTES.auth.login}`, User, { withCredentials: true }) )
    // )

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
  }
}
