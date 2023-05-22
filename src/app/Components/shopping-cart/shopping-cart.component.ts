import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services";
import {CartItem} from "../../interfaces/cart-item.interface";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  $cartTotalObservable!: Observable<number>;
  shoppingCart$!: Observable<CartItem[]>;
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.shoppingCart$ = this.cartService.cart$;
    this.$cartTotalObservable = this.cartService.cartTotal$;
  }

  onCheckout() {
    this.router.navigate(['checkout'])
  }

}
