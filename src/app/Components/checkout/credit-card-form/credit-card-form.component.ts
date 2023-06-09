import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subject, distinctUntilChanged, takeUntil } from "rxjs";
import { cardExpiryValidator, validMonthValidator } from 'src/app/helpers/custom.validators';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss']
})
export class CreditCardFormComponent implements OnInit, OnDestroy {

  @Output() statusChanged = new EventEmitter<string>()

  private readonly destroyer$ = new Subject<void>;



  creditCardForm: FormGroup = this.fb.group({
    cardHolderName: [null, [Validators.required]],
    cardNumberDisplay: [null, [Validators.required, Validators.pattern(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/)]],
    cardNumber: [null],
    expireDate: [null, [Validators.required, Validators.pattern(/\d{2}\/\d{2}/), validMonthValidator, cardExpiryValidator]],
    cvv: [null, [Validators.required, Validators.pattern('[0-9]{3}')]]
  })

  get last4DigitsOfCard() {
    if (this.creditCardForm.valid) {
      const creditCardNumber = this.creditCardForm.get('cardNumber')?.value;
      return creditCardNumber?.slice(-4);
    }
    return '';
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.creditCardForm.statusChanges
      .pipe(
        takeUntil(this.destroyer$),
        distinctUntilChanged(),)
      .subscribe((status) => {
        this.statusChanged.emit(status);
      })

      this.beautifyCreditCardDisplay();
      this.beautifyDateOfExpirationDisplay();

  }

  beautifyCreditCardDisplay(){
    const cardNumberDisplay = this.creditCardForm.get('cardNumberDisplay');
    const cardNumber = this.creditCardForm.get('cardNumber');

    if (cardNumberDisplay && cardNumber) {
      cardNumberDisplay.valueChanges.pipe(
        takeUntil(this.destroyer$)
      ).subscribe((value:string) => {
        const formatedCreditCard = value.replace(/\D/g, '').replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
        cardNumberDisplay.setValue(formatedCreditCard, { emitEvent: false });
        cardNumber.setValue(formatedCreditCard.replace(/\s/g, ''), { emitEvent: false })
      });
    }
  }

  beautifyDateOfExpirationDisplay(){
    const dateOfExpiration = this.creditCardForm.get('expireDate');

    if(dateOfExpiration){
      dateOfExpiration.valueChanges.pipe(
        takeUntil(this.destroyer$)
      ).subscribe((value:string) => {
        const dateWithoutNonNumbersCharacter = value.replace(/\D/g, '').replace(/\s/g, '').trim();

        const dateWithSlash = dateWithoutNonNumbersCharacter.replace(/(\d{2})(\d)/, '$1/$2');
        dateOfExpiration.setValue(dateWithSlash,{ emitEvent: false });

      })

    }

  }

  verifyDateValidity(){
    const dateOfExpiration = this.creditCardForm.get('expireDate');
    if(dateOfExpiration){
      dateOfExpiration.valueChanges.pipe(
        takeUntil(this.destroyer$)
      ).subscribe((value:string)=>{

      })
    }
  }


  ngOnDestroy(): void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }

}



