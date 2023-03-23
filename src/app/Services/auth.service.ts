import { HttpClient } from '@angular/common/http';
import {API_SIGNUP} from "../backend-routes";
import {UserRegistrationDataDTO} from "../DTOs/UserRegistrationDataDTO";
import {Injectable} from "@angular/core";
import {tap, catchError} from "rxjs";

@Injectable()
export class AuthService {

  public constructor(private http: HttpClient) {

  }
  public signup(User: UserRegistrationDataDTO){

    console.log(User)
    this.http.post(API_SIGNUP,User)
      .subscribe({
          next: (response) => {
            console.log(response)

          },
          error: (error) => {
           console.error(error)

          }
      })
  }
}
