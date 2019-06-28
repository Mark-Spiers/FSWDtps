import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { DataService } from './data.service';
import { Employee } from './employee'

@Directive({
  selector: '[ninUnique]',
  providers: [{provide: NG_VALIDATORS,
              useClass: NinuniqueDirective, multi: true }]
})

export class NinuniqueDirective implements Validator {
  data: DataService

  constructor(dataService : DataService) {
    this.data = dataService;
  }

  validate (control: AbstractControl): {[key: string]: any} | null {
    if (control.value == null){
      return null;
    }
    this.data.employees.subscribe({
      next(emp){ emp.forEach(
        function(element) {
          if(element.NIN == control.value){
            console.log("NIN not unique")
            return null
          }
        }); 
      }
    })
    console.log("NIN unique")
    return { ninUnique: true }
  }

}