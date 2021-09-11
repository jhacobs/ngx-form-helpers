import { FormControl, FormGroup } from "@angular/forms";
import { dutchPostalCode, ibanValidator, mustMatchValidator, customPatternValidator, dutchPhoneValidator, requiredIfValidator, numberValidator, floatValidator, booleanValidator } from "./validators";

describe('Validators', () => {
  it('the dutch postalcode validator should check if the input value is a valid dutch postalcode', () => {
    const validControl = new FormControl('2342KM', dutchPostalCode);
    const invalidControl = new FormControl('5344KMM', dutchPostalCode);

    expect(validControl.valid).toBeTrue();
    expect(invalidControl.valid).toBeFalse();
  });

  it('should check if the input value is a valid iban number', () => {
    const validControl = new FormControl('', ibanValidator);
    const invalidControl = new FormControl('asdf', ibanValidator);

    expect(validControl.valid).toBeTrue();
    expect(invalidControl.valid).toBeFalse();
  });

  it('should check if the two input values are the same', () => {
    const group = new FormGroup({
      one: new FormControl('one'),
      two: new FormControl('two')
    }, { validators: mustMatchValidator('one', 'two') });

    expect(group.valid).toBeFalse();

    group.get('two')?.patchValue('one');

    expect(group.valid).toBeTrue();
  });

  it('should check if the input value is valid according to the given regex pattern', () => {
    const validControl = new FormControl(
      'Test',
      customPatternValidator(/([A-Z])\w+/, { controlError: true })
    );

    const invalidControl = new FormControl(
      'Test',
      customPatternValidator(/([0-9])\w+/, { controlError: true })
    );

    expect(validControl.valid).toBeTrue();
    expect(invalidControl.valid).toBeFalse();
    expect(invalidControl.errors).toEqual({ controlError: true });
  })

  it('should check if the input value is a valid dutch phone number', () => {
    const validControl = new FormControl('0612345678', dutchPhoneValidator);
    const invalidControl = new FormControl('06123456789', dutchPhoneValidator);

    expect(validControl.valid).toBeTrue();
    expect(invalidControl.valid).toBeFalse();
  });

  it('should check if the input is set when an other control has a value', () => {
    const group = new FormGroup({
      one: new FormControl(''),
      two: new FormControl('')
    }, { validators: requiredIfValidator('two', 'one') });

    expect(group.valid).toBeTrue();

    group.get('one')?.setValue('Set');

    expect(group.valid).toBeFalse();

    group.get('two')?.setValue('Set');

    expect(group.valid).toBeTrue();
  })

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
})
