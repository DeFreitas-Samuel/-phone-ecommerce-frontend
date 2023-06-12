import { Component, OnInit } from '@angular/core';
import { AuthService, CartService } from "../../services";
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'ShoPhone';
  isLoggedIn: boolean = false;
  destroyer$ = new Subject<null>();

  constructor(private auth: AuthService, private cartService: CartService) {

  }


  ngOnInit() {
    this.bootstrap();
  }

  bootstrap() {
    this.auth.checkSessionStorageForUser();
    this.cartService.checkLocalStorageForPreviousCart();
    this.auth.loggedInUser
      .pipe(
        takeUntil(this.destroyer$)
      )
      .subscribe((user) => {
        this.isLoggedIn = !!user;
      });
  }

  logout() {
    this.auth.logout().subscribe();
  }

  ngOnDestroy() {
    this.destroyer$.next(null);
    this.destroyer$.complete();
  }

}
