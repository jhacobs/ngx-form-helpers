import { AbstractControl, ValidatorFn } from "@angular/forms"

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
