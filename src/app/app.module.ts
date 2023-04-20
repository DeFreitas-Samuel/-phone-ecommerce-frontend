import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { SignupComponent } from './components/signup/signup.component';
import {AuthService} from "./services";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { SandBoxService } from './services/sandbox.service';
import {AuthInterceptor} from "./helpers/auth.interceptor";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

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
    DashboardComponent
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
  providers: [AuthService, SandBoxService, HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
