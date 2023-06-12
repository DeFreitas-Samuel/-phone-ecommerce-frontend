import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services";
import { UserLoginData } from "../../models/UserLoginData";
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserLoginData = new UserLoginData();

  errorMessage: string = '';

  isLoading: Boolean = false;

  destroyer$: Subject<null> = new Subject<null>();

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.isLoading = true;
    this.auth.login(this.user)
      .subscribe({
        error: (next: HttpErrorResponse) => {
          this.errorMessage = next.error.error
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
          this.router.navigate(['home']);
        }
      });
  }




}
