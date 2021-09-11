import { FormControl } from "@angular/forms"
import { ibanValidator } from "./iban.validator";

describe('IbanValidator', () => {
  it('should check if the input value is a valid iban number', () => {
    const validControl = new FormControl('', ibanValidator);
    const invalidControl = new FormControl('asdf', ibanValidator);

    expect(validControl.valid).toBeTrue();
    expect(invalidControl.valid).toBeFalse();
  });
});
