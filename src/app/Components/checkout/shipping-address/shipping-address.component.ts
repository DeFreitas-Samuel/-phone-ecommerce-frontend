import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { distinctUntilChanged } from "rxjs";

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.scss']
})
export class ShippingAddressComponent implements OnInit {

  @Output() statusChanged = new EventEmitter<string>()


  get shippingAddress(): {
    address: string,
    city: string,
    state: string,
    phoneNumber: string,
    zipCode: string,
  } {
    if (this.shippingAddressForm.valid) {
      return this.shippingAddressForm.value;
    }
    throw new Error('The form must be valid'); 
  }

  shippingAddressForm: FormGroup = this.fb.group({
    address: [null, [Validators.required]],
    city: [null, [Validators.required]],
    state: [null, [Validators.required]],
    phoneNumber: [null, [Validators.required, Validators.pattern('[0-9]{10}')]],
    zipCode: [null, [Validators.required, Validators.pattern('[0-9]{5}')]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.shippingAddressForm.statusChanges
      .pipe(distinctUntilChanged())
      .subscribe((status) => {
        this.statusChanged.emit(status);
      })
  }

}
