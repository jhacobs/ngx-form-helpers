import { FormControl, Validators } from "@angular/forms"
import { setControlAsInvalid, setControlAsValid } from "./control-validity";

describe('ControlValidity', () => {
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
});
