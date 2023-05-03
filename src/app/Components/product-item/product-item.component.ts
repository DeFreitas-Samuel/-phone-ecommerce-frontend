import {Component, Input, OnInit} from '@angular/core';
import {AuthService, CartService, PurchaseService} from "../../services";
import {Order} from "../../interfaces/order.interface";
import { CartItem } from 'src/app/interfaces/cart-item.interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() id!: number;
  @Input()  name: string ="";
  @Input()  price: string ="";
  @Input() imageUrl: string = "";
  quantity:number = 1;
  cartCopy: CartItem[] = [];

  constructor(private cartService: CartService ) { }

  ngOnInit(): void {

  }


  onAddToCartFromList(){

      const newCartItem:CartItem = {
        product_id: this.id,
        quantity: 1,
        totalPrice: Number(this.price)
      }
      this.cartService.addElementToCart(newCartItem);
      this.cartService.getCart.subscribe( cart =>
        this.cartCopy = cart
      )
      console.log(this.cartCopy);
  }


}
