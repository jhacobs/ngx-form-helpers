import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const customPatternValidator = (regex: RegExp, error: ValidationErrors): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (! control.value) {
      return null;
    }

    const valid = regex.test(control.value);

    return valid ? null : error;
  }
}
