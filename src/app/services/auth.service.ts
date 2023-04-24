import { HttpClient } from '@angular/common/http';
import { BACKEND_ROUTES } from "../backend.routes";
import { UserRegistrationDataDTO } from "../DTOs/UserRegistrationDataDTO";
import { Injectable } from "@angular/core";
import { UserLoginDataDTO } from "../DTOs/UserLoginDataDTO";
import { tap, map, BehaviorSubject } from 'rxjs';
import { JsonTokenInterface } from "../interfaces/jsonToken.interface";
import { UserInterface } from "../interfaces/user.interface";
import { Router } from "@angular/router";
import { ROUTES } from 'src/app/token/routes.token';
import { RouteType } from 'src/app/backend.routes';
import { Inject } from '@angular/core';

@Injectable()
export class AuthService {

  private _currentLoggedUser: BehaviorSubject<UserInterface|null> = new BehaviorSubject<UserInterface|null>(null);
  public constructor(private http: HttpClient, private router: Router, @Inject(ROUTES) private readonly routes: RouteType) {

  }



  get currentLoggedUser() {
    return this._currentLoggedUser.asObservable();
  }

  updateCurrentLoggedUser(user: UserInterface|null) {
    this._currentLoggedUser.next(user);
  }


  public signUp(User: UserRegistrationDataDTO) {

    return this.http.post<JsonTokenInterface>(`${this.routes.base}${this.routes.auth.register}`, User, { withCredentials: true })
      .pipe(
        tap((response: JsonTokenInterface) => {
          if (response.access_token) {
            localStorage.setItem('access_token', response.access_token);
            this.updateCurrentLoggedUser(response.user);
            console.log('Access token set:', response.access_token);
            console.log('Current logged user set:', response.user);
          }
        })
      )
  }
  public login(User: UserLoginDataDTO) {


    return this.http.post<JsonTokenInterface>(`${this.routes.base}${this.routes.auth.login}`, User, { withCredentials: true })
      .pipe(
        tap((response: JsonTokenInterface) => {
          if (response.access_token) {
            localStorage.setItem('access_token', response.access_token);
            this.updateCurrentLoggedUser(response.user);
          }
        })
      );

  }



  public logout() {
    return this.http.post(`${this.routes.base}${this.routes.auth.logout}`, { withCredentials: true })
      .pipe(
        tap( () => {
          localStorage.removeItem("access_token");
          this.updateCurrentLoggedUser(null);
        })
    )
  }
}
