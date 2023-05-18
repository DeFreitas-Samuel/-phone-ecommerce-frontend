import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {distinctUntilChanged} from "rxjs";

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss']
})
export class CreditCardFormComponent implements OnInit {

  @Output() statusChanged = new EventEmitter()

  creditCardForm: FormGroup = this.fb.group({
    cardHolderName: [null, [Validators.required]],
    cardNumber: [null, [Validators.required, Validators.pattern('[0-9]{16}')]],
    expireDate: [null, [Validators.required, Validators.pattern('[0-9]{4}')]],
    cvv: [null, [Validators.required, Validators.pattern('[0-9]{3}')]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.creditCardForm.statusChanges
      .pipe(distinctUntilChanged())
      .subscribe(status => {
      this.statusChanged.emit(status);
    })
  }

}
