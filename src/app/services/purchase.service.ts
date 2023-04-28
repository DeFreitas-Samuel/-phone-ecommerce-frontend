import {Inject, Injectable} from '@angular/core';
import {Order} from "../interfaces/order.interface";
import {HttpClient} from "@angular/common/http";
import {ROUTES} from "../token/routes.token";
import {RouteType} from "../backend.routes";

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http: HttpClient, @Inject(ROUTES) private readonly routes: RouteType) { }

  purchase(order: Order){
      return this.http.post(this.routes.base + this.routes.purchase.purchase, order)
  }

}
