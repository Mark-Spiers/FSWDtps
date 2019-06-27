import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
//classes to define directive as validator

@Directive({
  selector: '[cityDistrict]',
  providers: [{provide : NG_VALIDATORS, useClass: DistrictDirective, multi: true}]
})

export class DistrictDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    var validDistricts = [
      'Leinster',
      'Wales',
      'Scotland'
    ];
    return validDistricts.includes(control.value) ? null : { nosuchdistrict: true };
  }
}
