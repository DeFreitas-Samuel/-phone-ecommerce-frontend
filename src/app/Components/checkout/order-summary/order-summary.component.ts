import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../services";
import {CartItem} from "../../../interfaces/cart-item.interface";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

  $cartTotalObservable!: Observable<number>;
  $cartCopyObservable!: Observable<CartItem[]>



  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.$cartCopyObservable = this.cartService.cart$;
    this.$cartTotalObservable = this.cartService.cartTotal$;
  }

}
