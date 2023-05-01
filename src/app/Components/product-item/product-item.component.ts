import {Component, Input, OnInit} from '@angular/core';
import {AuthService, PurchaseService} from "../../services";
import {Order} from "../../interfaces/order.interface";

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

  constructor(private purchaseService: PurchaseService, private authService: AuthService) { }

  ngOnInit(): void {

  }


  onAddToCart(){
      const order: Order = {
      product_id: this.id,
      user_id: this.authService.currentLoggedUserSnapshot?.id ?? -1,
      quantity: 1,
      total:  Number(this.price)
      }
      console.log(order);

  }
  // onPurchase(){
  //   const order: Order = {
  //     product_id: this.id,
  //     user_id: this.authService.currentLoggedUserSnapshot?.id ?? -1,
  //     quantity: 1,
  //     total:  Number(this.price)

  //   }
  //   if(order.user_id !== -1){
  //     this.purchaseService.purchase(order).subscribe(console.log)
  //   }
  //   else {
  //     console.error("You have to be logged in to buy!");
  //   }

  // }

}
