import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export const dutchPostalCode: ValidatorFn = Validators.pattern(/^[1-9][0-9]{3}[\s]?[A-Za-z]{2}$/i);

export const ibanValidator: ValidatorFn = Validators.pattern(/^[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}$/);

export const mustMatchValidator = (controlName: string, matchingControlName: string): ValidatorFn => {
  return (group: AbstractControl): { [key: string]: any } | null => {
    const control = group.get(controlName);
    const matchingControl = group.get(matchingControlName);

    if (! control || ! matchingControl) {
      return null;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ MustMatch: true });
      return { mustMatch: true };
    }

    return null;
  }
}

export const customPatternValidator = (regex: RegExp, error: ValidationErrors): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (! control.value) {
      return null;
    }

    const valid = regex.test(control.value);

    return valid ? null : error;
  }
}

export const dutchPhoneValidator: ValidatorFn = Validators.pattern(/^(((0)[1-9]{2}[0-9][-]?[1-9][0-9]{5})|((\\+31|0|0031)[1-9][0-9][-]?[1-9][0-9]{6}))$/);

export const requiredIfValidator = (controlName: string, requiredControlName: string): ValidatorFn => {
  return (group: AbstractControl): { [key: string]: any } | null => {
    const control = group.get(controlName);
    const requiredControl = group.get(requiredControlName);

    if (! control || ! requiredControl) {
      return null;
    }

    if (!requiredControl.value) {
      return null;
    }

    if (!!requiredControl.value && !!control.value) {
      return null;
    }

    return { 'requiredIf': { controlValue: control.value, requiredControlValue: requiredControl.value } };
  }
}

export const numberValidator: ValidatorFn = Validators.pattern(/^([1-9]\d*(\.|\,)\d*|0?(\.|\,)\d*[1-9]\d*|[1-9]\d*)$/);

export const floatValidator: ValidatorFn = Validators.pattern(/^[0-9]+\.[0-9]+$/);

export const booleanValidator: ValidatorFn = Validators.pattern(/^(true|false|0|1)$/);
