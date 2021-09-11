import { FormControl, FormGroup } from "@angular/forms"
import { mustMatchValidator } from "./must-match.validator";

describe('MustMatchValidator', () => {
  it('should check if the two input values are the same', () => {
    const group = new FormGroup({
      one: new FormControl('one'),
      two: new FormControl('two')
    }, { validators: mustMatchValidator('one', 'two') });

    expect(group.valid).toBeFalse();

    group.get('two')?.patchValue('one');

    expect(group.valid).toBeTrue();
  });
});
