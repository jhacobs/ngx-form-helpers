import { FormControl } from "@angular/forms"
import { customPatternValidator } from "./pattern-validator"

describe('CustomPatternValidator', () => {
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
    expect(invalidControl.errors).toBe({ controlError: true });
  })
});
