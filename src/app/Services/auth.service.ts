import { HttpClient } from '@angular/common/http';
import { BACKEND_ROUTES } from "../backend.routes";
import { UserRegistrationDataDTO } from "../DTOs/UserRegistrationDataDTO";
import { Injectable } from "@angular/core";
import { UserLoginDataDTO } from "../DTOs/UserLoginDataDTO";
import { switchMap, tap } from 'rxjs';

@Injectable()
export class AuthService {

  loginErrorMessage: string = "";


  public constructor(private http: HttpClient) {

  }
  public SignUp(User: UserRegistrationDataDTO) {
    return this.GetCSRFTokenFromLaravel().pipe(
      tap(() => console.log(User)),
      switchMap(() => this.http.post(`${BACKEND_ROUTES.base}${BACKEND_ROUTES.auth.register}`, User, { withCredentials: true }))
    )
  }
  public Login(User: UserLoginDataDTO) {
    return this.GetCSRFTokenFromLaravel().pipe(
      tap(() => console.log(User)),
      switchMap(() => this.http.post(`${BACKEND_ROUTES.base}${BACKEND_ROUTES.auth.login}`, User, { withCredentials: true }))
    )

  }

  private GetCSRFTokenFromLaravel() {
    return this.http.get(`${BACKEND_ROUTES.base}${BACKEND_ROUTES.auth.csrf}`, { withCredentials: true })
  }

  public Logout() {
    return this.http.post(`${BACKEND_ROUTES.base}${BACKEND_ROUTES.auth.logout}`, { withCredentials: true })
  }
}
