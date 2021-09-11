import { FormControl } from "@angular/forms"
import { dutchPhoneValidator } from "./phone.validator"

describe('PhoneValidator', () => {
  it('should check if the input value is a valid dutch phone number', () => {
    const validControl = new FormControl('0612345678', dutchPhoneValidator);
    const invalidControl = new FormControl('06123456789', dutchPhoneValidator);

    expect(validControl.valid).toBeTrue();
    expect(invalidControl.valid).toBeFalse();
  });
});
