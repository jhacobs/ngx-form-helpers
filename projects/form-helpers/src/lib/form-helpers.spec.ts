import { FormControl, FormGroup, Validators } from "@angular/forms";
import { setControlAsValid, setControlAsInvalid, getAllErrors, getAllFieldNames, markAllAsDirty } from "./form-helpers";

describe('FormHelpers', () => {
  it('could set a control as valid', () => {
    const control = new FormControl('Test', Validators.email);
    expect(control.valid).toBeFalse();
    setControlAsValid(control);
    expect(control.valid).toBeTrue();
  });

  it('could set a control as invalid', () => {
    const control = new FormControl('Test');
    expect(control.valid).toBeTrue();
    setControlAsInvalid(control);
    expect(control.valid).toBeFalse();
  });

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

    expect(errors).toEqual({
      one: { 'invalid': true },
      two: { 'error': true },
      three: { 'exception': true }
    });
  });

  it('could get all field names of a group', () => {
    const group = new FormGroup({
      one: new FormControl(''),
      two: new FormControl('')
    });

    const fields = getAllFieldNames(group);

    expect(fields).toEqual([
      'one',
      'two'
    ]);
  });

  it('could mark all controls in a group as dirty', () => {
    const group = new FormGroup({
      one: new FormControl(''),
      two: new FormControl('')
    });

    expect(group.get('one')?.dirty).toBeFalse();
    expect(group.get('two')?.dirty).toBeFalse();

    markAllAsDirty(group);

    expect(group.get('one')?.dirty).toBeTrue();
    expect(group.get('two')?.dirty).toBeTrue();
  });
})
