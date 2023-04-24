import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import { HomeComponent } from './components/home/home.component';
import {authGuard} from "./auth/auth.guard";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {ProductListComponent} from "./components/product-list/product-list.component";


const routes: Routes = [
  {path: "login", component: LoginComponent, title: "Login", },
  {path: "signup", component: SignupComponent, title: "Sign Up", },
  {path: "home", component: HomeComponent, title: "Home"},
  {path: "dashboard", component: DashboardComponent, title: "Dashboard", canActivate:[authGuard]},
  {path: "not-found", component: PageNotFoundComponent, title:"Not Found"},
  {path: "products", component: ProductListComponent},
  {path: "", redirectTo:"home", pathMatch:"full"},
  {path: "**", redirectTo:"not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
