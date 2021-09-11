import { FormControl, FormGroup } from "@angular/forms";
import { getAllErrors } from "./form-errors";

describe('FormErrors', () => {
  it('could get all errors of a form group', () => {
    const group = new FormGroup({
      one: new FormControl(''),
      two: new FormControl(''),
      three: new FormControl('')
    });

    group.get('one')?.setErrors({ 'invalid': true });
    group.get('two')?.setErrors({ 'error': true });
    group.get('three')?.setErrors({ 'exception': true });

    const errors = getAllErrors(group);

    expect(errors).toBe({
      one: { 'invalid': true },
      two: { 'error': true },
      three: { 'exception': true }
    });
  });
})
