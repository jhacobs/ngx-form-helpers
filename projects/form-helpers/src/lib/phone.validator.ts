import { ValidatorFn, Validators } from "@angular/forms";

export const dutchPhoneValidator: ValidatorFn = Validators.pattern(/^(((0)[1-9]{2}[0-9][-]?[1-9][0-9]{5})|((\\+31|0|0031)[1-9][0-9][-]?[1-9][0-9]{6}))$/);
