import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appUrlValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: UrlValidatorDirective, multi: true }]
})
export class UrlValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {

    // En cas de règle respecté (value commence par http), retourner null
    // Sinon retourner l'objet { UrlValidatorDirective : true }

    if (control.value && control.value.startsWith('http')) {
      return null; // OK
    }

    return { UrlValidatorDirective: true }; // KO => pas valide
  }

}
