import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';


import { SignupComponent } from './components/signup/signup.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductItemComponent } from './components/product-list/product-item/product-item.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


import { AuthInterceptor } from "./helpers/auth.interceptor";
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './components/shopping-cart/shopping-cart-item/shopping-cart-item.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CreditCardFormComponent } from './components/checkout/credit-card-form/credit-card-form.component';
import { ShippingAddressComponent } from './components/checkout/shipping-address/shipping-address.component';
import { OrderSummaryComponent } from './components/checkout/order-summary/order-summary.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    UserDashboardComponent,
    HomeComponent,
    PageNotFoundComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    CheckoutComponent,
    CreditCardFormComponent,
    ShippingAddressComponent,
    OrderSummaryComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,

  ],
  providers: [HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
