import { Component, OnInit } from '@angular/core';
import { AuthService, CartService } from "../../services";
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  isLoggedIn: boolean = false;
  destroyer$ = new Subject<null>();
  totalItemsInCart = 0;
  isLoading: Boolean = false;

  constructor(private authService: AuthService, private cartService: CartService, private router: Router) {

  }


  ngOnInit() {
    this.bootstrap();
  }

  bootstrap() {

    this.cartService.cartNumberOfItems$
      .pipe(
        takeUntil(this.destroyer$)
      )  
      .subscribe((amount:number) => {
        this.totalItemsInCart = amount;
      })
    this.authService.loggedInUser
      .pipe(
        takeUntil(this.destroyer$)
      )
      .subscribe((user) => {
        this.isLoggedIn = !!user;
      });
  }

  logout() {
    this.isLoading = true;
    this.authService.logout().subscribe({
      error: () => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
        this.router.navigate(['login']);
      }
    });
  }

  ngOnDestroy() {
    this.destroyer$.next(null);
    this.destroyer$.complete();
  }

}
