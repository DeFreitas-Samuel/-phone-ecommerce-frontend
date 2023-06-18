import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import {AuthService, CartService, ProductsService, PurchaseService} from 'src/app/services';
import {CartItem} from "../../interfaces/cart-item.interface";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy{
  private product!: Product;
  private productSubscription!: Subscription;
  product$!: Observable<Product>;
  quantity: number = 1;
  cartCopy: CartItem[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductsService,
              private purchaseService: PurchaseService, private authService: AuthService,
              private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id']
    this.product$ = this.productService.getOneProduct(productId);
    this.productSubscription = this.product$.subscribe((product:Product) => {
      this.product = product;
    })


  }
  onAddQuantity(){
    this.quantity++;
  }

  onSubtractQuantity(){
    if(this.quantity > 1){
      this.quantity--;
    }

  }

  onAddToCartFromDetail(){

    const newCartItem:CartItem = {
      product_id: this.product.id,
      name: this.product.name,
      quantity: this.quantity,
      totalPrice: parseFloat((Number(this.product.price) * this.quantity).toFixed(2)),
      imageUrl: this.product.imageUrl,
      unitPrice: Number(this.product.price)
    }
    this.cartService.addElementToCart(newCartItem);
    this.router.navigate(['cart']);

  }

  ngOnDestroy(){
    if(this.productSubscription){
      this.productSubscription.unsubscribe();
    }
  }


}
