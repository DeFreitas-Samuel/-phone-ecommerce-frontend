import { Inject, Injectable } from '@angular/core';
import { Order } from "../interfaces/order.interface";
import { HttpClient } from "@angular/common/http";
import { ROUTES } from "../token/routes.token";
import { RouteType } from "../backend.routes";
import { AuthService } from './auth.service';
import { CartService } from './cart.service';
import { ShippingAddress } from '../interfaces/shipping-address.interface';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http: HttpClient, 
              @Inject(ROUTES) private readonly routes: RouteType,
              private authService: AuthService,
              private cartService: CartService) { }

  purchase(paymentTypeSelected: string, last4DigitsOfCard: string, shippingAddress: ShippingAddress) {
    const order: Order = {
      user_id: this.authService.loggedInUserIdSnapshot,
      products: this.cartService.cartSnapshot,
      total: this.cartService.cartTotalSnapshot,
      payment_method: paymentTypeSelected,
      last4DigitsOfCard: last4DigitsOfCard,
      shipping_address: shippingAddress
    }

 
    this.http.post(this.routes.base + this.routes.purchase.purchase, order).subscribe(console.log)
  }

  

}
