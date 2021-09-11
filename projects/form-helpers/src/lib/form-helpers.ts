import { AbstractControl, FormGroup } from "@angular/forms";

export const setControlAsValid = (control: AbstractControl): void => {
  control.setErrors(null);
}

export const setControlAsInvalid = (control: AbstractControl): void => {
  control.setErrors({ incorrect: true });
}

type Errors = { [key: string]: any };

export const getAllErrors = (group: FormGroup): Errors => {
  const errors: Errors = {};

  Object.keys(group.controls).forEach((field) => {
    errors[field] = group.get(field)?.errors;
  });

  return errors;
}

export const getAllFieldNames = (group: FormGroup): string[] => {
  return Object.keys(group.controls);
}

export const markAllAsDirty = (group: FormGroup): void => {
  Object.values(group.controls).forEach((control) => control.markAsDirty());
}
