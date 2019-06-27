import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[companyAddress]',
  providers: [{provide: NG_VALIDATORS,
    useClass: AddressDirective, multi: true }]
})
export class AddressDirective {

  constructor() { }

  validate (control: AbstractControl): {[key: string]: any} | null {
    if (control.value == null){
      return null;
    }
      return control.value.length <= 100 ? null : { addresstoolong: true};
  }

}
