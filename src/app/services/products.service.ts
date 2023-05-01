import {Inject, Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ROUTES} from "../token/routes.token";
import {RouteType} from "../backend.routes";
import {BehaviorSubject, catchError, EMPTY} from "rxjs";
import {Product} from "../interfaces/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  //TODO retrieve all the products from the api
  //TODO look for a way to filter by brand and category
  //TODO look for a way to sort by price
  //todo look for a way to implement pagination



  private products: Product[]|null = null;

  private productsSubject = new BehaviorSubject<Product[]|null>(null);

  constructor(private http: HttpClient, @Inject(ROUTES) private readonly routes: RouteType) { }

  getProducts()/*Observable<Product[]|null>*/ {

    return this.http.get<Product[]>(this.routes.base + this.routes.products.products).pipe(
        catchError( err => {
          console.log(err);
          return EMPTY;
        })
    )
  }
  getOneProduct(id: string) {
    return this.http.get<Product>(this.routes.base + this.routes.products.product + `/${id}`).pipe(
      catchError( err => {
        console.log(err);
        return EMPTY;
      })
  )
  }

}
