import { Injectable } from '@angular/core';
import { CartItem } from '../interfaces/cart-item.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: CartItem[] = [];
  private cartSubject:BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>(this.cart);

  constructor() { }

  addElementToCart(itemToBeAdded: CartItem){
    const index = this.cart.findIndex(e => e.product_id === itemToBeAdded.product_id )

    if(index !== -1 ){
      const cartItemToBeModified = this.cart[index];
      cartItemToBeModified.quantity += itemToBeAdded.quantity;
      cartItemToBeModified.totalPrice += itemToBeAdded.totalPrice;

    }
    else{
      this.cart.push(itemToBeAdded);
    }

    this.cartSubject.next(this.cart);
  }

  get getCart(){
    return this.cartSubject.asObservable();
  }

}
