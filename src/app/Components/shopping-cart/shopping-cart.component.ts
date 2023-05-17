import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services";
import {CartItem} from "../../interfaces/cart-item.interface";
import {Observable} from "rxjs";
<<<<<<< HEAD
import {Router} from "@angular/router";
=======
import { Router } from '@angular/router';
>>>>>>> 1008225ae1616d4094fd4762411634622d0f546a

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCart$!: Observable<CartItem[]>;
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.shoppingCart$ = this.cartService.getCart;
  }

<<<<<<< HEAD
  onCheckOut() {
    this.router.navigate(['checkout'])
  }
=======
  onCheckout() {
    this.router.navigate(['checkout'])
  }

>>>>>>> 1008225ae1616d4094fd4762411634622d0f546a
}
