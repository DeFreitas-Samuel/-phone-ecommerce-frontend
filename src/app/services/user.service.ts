import { Inject, Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { ROUTES } from "../token/routes.token";
import { RouteType } from "../backend.routes";
import { HttpClient } from "@angular/common/http";
import { UserOrder } from "../interfaces/user-order.interface";
import { tap } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class UserService  {
    constructor(@Inject(ROUTES) private readonly routes: RouteType,
    private http: HttpClient,
    private authService: AuthService){

    }
    getOrdersFromUser() {
        return this.http.get<UserOrder[]>(this.routes.base + this.routes.orders.orders + `/${this.authService.loggedInUserIdSnapshot}`)
    }

}