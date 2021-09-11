import { AbstractControl, ValidatorFn } from "@angular/forms";

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

    if (!!requiredControl.value && control.value !== null) {
      return null;
    }

    return { 'requiredIf': { controlValue: control.value, requiredControlValue: requiredControl.value, expectedValue } };
  }
}
