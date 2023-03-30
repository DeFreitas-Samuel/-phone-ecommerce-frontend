import { HttpClient } from '@angular/common/http';
import { BACKEND_ROUTES } from "../backend.routes";
import { UserRegistrationDataDTO } from "../DTOs/UserRegistrationDataDTO";
import { Injectable } from "@angular/core";
import { UserLoginDataDTO } from "../DTOs/UserLoginDataDTO";

@Injectable()
export class AuthService {

  loginErrorMessage: string = "";


  public constructor(private http: HttpClient) {

  }
  public SignUp(User: UserRegistrationDataDTO) {
    this.GetCSRFTokenFromLaravel()
    console.log(User)
    this.http.post(`${BACKEND_ROUTES.base}${BACKEND_ROUTES.auth.register}`, User)
      .subscribe({
        next: (response) => {
          console.log(response)

        },
        error: (error) => {
          console.error(error)

        }
      })
  }
  public Login(User: UserLoginDataDTO) {
    this.GetCSRFTokenFromLaravel()


    return this.http.post(`${BACKEND_ROUTES.base}${BACKEND_ROUTES.auth.login}`, User, { withCredentials: true })
      .subscribe({
        next: (response) => {
          console.log(response)

        },
        error: (error) => {
          console.error(error)

        }
      })
  }

  public GetCSRFTokenFromLaravel() {
    this.http.get(`${BACKEND_ROUTES.base}${BACKEND_ROUTES.auth.csrf}`, { withCredentials: true })
      .subscribe({
        next: (response) => {
          console.log(response)

        },
        error: (error) => {
          console.error(error)

        }
      });
  }
}
