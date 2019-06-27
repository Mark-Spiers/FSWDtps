import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[companyName]',
  providers: [{provide: NG_VALIDATORS,
              useClass: NameDirective, multi: true }]
})

export class NameDirective implements Validator {

  constructor() { }

  validate (control: AbstractControl): {[key: string]: any} | null {
    if (control.value == null){
      return null;
    }
      return control.value.length < 50 ? null : { nametoolong: true};
  }

}
