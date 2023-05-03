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

  addElementToCart(cartItem: CartItem){
    this.cart.push(cartItem);
    this.cartSubject.next(this.cart);
  }

  get getCart(){
    return this.cartSubject.asObservable();
  }
  
}
