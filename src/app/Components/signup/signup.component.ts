import { Component, OnInit } from '@angular/core';
import {UserRegistrationData} from "../../models/UserRegistrationData";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: UserRegistrationData = new UserRegistrationData();
  signUpForm: FormGroup;
  errorMessage:string = '';

  constructor(private auth: AuthService, private router: Router) {
    this.signUpForm = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'phonenumber': new FormControl(null, [Validators.required, Validators.pattern(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/)]),
      'birthdate': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'password': new FormControl(null,  /*[Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),*/ Validators.required)
    })
  }

  ngOnInit(): void {

  }

  signUp(){
    //console.log(this.signUpForm.value);
    this.user.firstname = this.signUpForm.get('firstname')?.value;
    this.user.lastname = this.signUpForm.get('lastname')?.value;
    this.user.address = this.signUpForm.get('address')?.value;
    this.user.contact_number = this.signUpForm.get('phonenumber')?.value;
    this.user.birthdate = this.signUpForm.get('birthdate')?.value;
    this.user.email = this.signUpForm.get('email')?.value;
    this.user.password = this.signUpForm.get('password')?.value;

    const observer = {
      error: (next:HttpErrorResponse) => this.errorMessage = next.error.error,
      complete: () => this.router.navigate(['home'])
    };
    this.auth.signUp(this.user.toDTO()).subscribe(observer);
  }

}
