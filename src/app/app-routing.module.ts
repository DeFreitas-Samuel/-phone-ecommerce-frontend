import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import { HomeComponent } from './components/home/home.component';
import {authGuard} from "./auth/auth.guard";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import {ProductListComponent} from "./components/product-list/product-list.component";
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';


const routes: Routes = [
  {path: "login", component: LoginComponent, title: "Login", },
  {path: "signup", component: SignupComponent, title: "Sign Up", },
  {path: "home", component: HomeComponent, title: "Home"},
  {path: "dashboard", component: UserDashboardComponent, title: "Dashboard", canActivate:[authGuard]},
  {path: "not-found", component: PageNotFoundComponent, title:"Not Found"},
  {path: "products", component: ProductListComponent, title:"Product List"},
  {path: "product/:id", component: ProductDetailComponent, title:"Product Detail"},
  {path: "cart", component:ShoppingCartComponent, title:"Shopping Cart"},
  {path: "checkout", component:CheckoutComponent, title:"Checkout"},
  {path: "", redirectTo:"home", pathMatch:"full"},
  {path: "**", redirectTo:"not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
