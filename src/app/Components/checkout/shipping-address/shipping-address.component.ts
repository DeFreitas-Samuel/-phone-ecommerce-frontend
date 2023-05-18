import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {distinctUntilChanged} from "rxjs";

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.scss']
})
export class ShippingAddressComponent implements OnInit {

  @Output() statusChanged = new EventEmitter()

  shippingAddressForm = this.formBuilder.group({
    address: [null, [Validators.required]],
    city: [null, [Validators.required]],
    state: [null, [Validators.required]],
    phoneNumber: [null, [Validators.required, Validators.pattern('[0-9]{10}')]],
    zipCode: [null, [Validators.required, Validators.pattern('[0-9]{5}')]]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.shippingAddressForm.statusChanges
      .pipe(distinctUntilChanged())
      .subscribe(status => {
        this.statusChanged.emit(status);
      })
  }

}
