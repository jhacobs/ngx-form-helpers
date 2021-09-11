import { ValidatorFn, Validators } from "@angular/forms";

export const numberValidator: ValidatorFn = Validators.pattern(/^[0-9]+\.[0-9]+$/);

export const floatValidator: ValidatorFn = Validators.pattern(/^[0-9]+\.[0-9]+$/);

export const booleanValidator: ValidatorFn = Validators.pattern(/^(true|false|0|1)$/);
