import { AbstractControl, FormGroup } from "@angular/forms";

type Errors = { [key: string]: any };

export const getAllErrors = (group: FormGroup): Errors => {
  const errors: Errors = {};

  Object.keys(group.controls).forEach((field) => {
    errors[field] = group.get(field)?.errors;
  });

  return errors;
}
