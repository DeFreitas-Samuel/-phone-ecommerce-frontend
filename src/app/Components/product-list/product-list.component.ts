import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { Product } from "../../interfaces/product.interface";
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productsArray$!: Observable<Product[]>|null;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsArray$ = this.productsService.getProducts();

  }

}
