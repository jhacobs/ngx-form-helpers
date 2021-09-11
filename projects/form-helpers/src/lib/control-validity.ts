import { AbstractControl } from "@angular/forms";

export const setControlAsValid = (control: AbstractControl): void => {
  control.setErrors(null);
}

export const setControlAsInvalid = (control: AbstractControl): void => {
  control.setErrors({ incorrect: true });
}
