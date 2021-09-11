import { FormControl } from "@angular/forms";
import { booleanValidator, floatValidator, numberValidator } from "./type.validators";

describe('TypeValidators', () => {
  it('should check if the input value is a number', () => {
    const validControl = new FormControl(12, numberValidator);
    const invalidControl = new FormControl('T', numberValidator);

    expect(validControl.valid).toBeTrue();
    expect(invalidControl.valid).toBeFalse();
  });

  it('should check if the input value is a float', () => {
    const validControl = new FormControl(10.5, floatValidator);
    const invalidControl = new FormControl(12, floatValidator);

    expect(validControl.valid).toBeTrue();
    expect(invalidControl.valid).toBeFalse();
  });

  it('should check if the input value is a boolean', () => {
    const validControl = new FormControl(false, booleanValidator);
    const invalidControl = new FormControl('D', booleanValidator);

    expect(validControl.valid).toBeTrue();
    expect(invalidControl.valid).toBeFalse();
  });
});
