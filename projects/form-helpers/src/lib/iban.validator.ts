import { ValidatorFn, Validators } from "@angular/forms";

export const ibanValidator: ValidatorFn = Validators.pattern(/^[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}$/);
