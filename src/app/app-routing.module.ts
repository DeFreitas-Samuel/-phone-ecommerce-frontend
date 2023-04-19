import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import { HomeComponent } from './components/home/home.component';
import {PageNotFoundComponent} from "./Components/page-not-found/page-not-found.component";
import {authGuard} from "./auth/auth.guard";
import {DashboardComponent} from "./Components/dashboard/dashboard.component";

const routes: Routes = [
  {path: "login", component: LoginComponent, title: "Login", },
  {path: "signup", component: SignupComponent, title: "Sign Up", },
  {path: "home", component: HomeComponent, title: "Home"},
  {path: "dashboard", component: DashboardComponent, title: "Dashboard", /*canActivate:[!authGuard]*/},
  {path: "", redirectTo:"home", pathMatch:"full"},
  {path: "**", component:PageNotFoundComponent, title:"Not Found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
