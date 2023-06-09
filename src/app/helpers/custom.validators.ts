import { AbstractControl } from "@angular/forms";

export function validMonthValidator(control: AbstractControl) {

    const value: string = control.value;
    if (value) {
        const inputMonth = parseInt(value.slice(0, 2));
        if (isNaN(inputMonth) || inputMonth < 1 || inputMonth > 12) {
            return { 'invalidMonth': { value: control.value } };
        }
    }
    return null;

}
export function cardExpiryValidator(control: AbstractControl){
    const BASE_YEAR = 2000;

    const value: string = control.value;
    const currentDate = new Date(Date.now());

    const currentYear = currentDate.getFullYear() - BASE_YEAR;
    const currentMonth = currentDate.getMonth()+1;
    
    if (value) {
        const inputMonth = parseInt(value.slice(0, 2));
        const inputYear = parseInt(value.slice(3,5));

        if (isNaN(inputYear) || inputYear < currentYear) {
            return { 'expiredCard': { value: control.value } };
        }
        if (isNaN(inputMonth) || (inputMonth <= currentMonth && inputYear <= currentYear)){
            return { 'expiredCard': { value: control.value } };
        }
    }
    return null;
}