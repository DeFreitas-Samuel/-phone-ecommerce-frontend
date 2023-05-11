import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  constructor() { }

  cardHolderName = new FormControl(null, [Validators.required]);
  cardNumber = new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{16}$')]);
  expirationDate = new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{4}$')]);
  cvv = new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{4}$')]);

  ngOnInit(): void {
  }

}
