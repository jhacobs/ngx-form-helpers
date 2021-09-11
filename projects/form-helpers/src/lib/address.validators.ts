import { ValidatorFn, Validators } from "@angular/forms";

export const dutchPostalCode: ValidatorFn = Validators.pattern(/^[1-9][0-9]{3}[\s]?[A-Za-z]{2}$/i);
