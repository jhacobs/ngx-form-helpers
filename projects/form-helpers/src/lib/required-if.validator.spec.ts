import { FormControl, FormGroup } from "@angular/forms"
import { requiredIfValidator } from "./required-if.validator"

describe('RequiredIfValidator', () => {
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
});
