import { FormControl, FormGroup } from "@angular/forms"
import { markAllAsDirty } from "./mark-all-as-dirty";

describe('MarkAllAsDirty', () => {
  it('could mark all controls in a group as dirty', () => {
    const group = new FormGroup({
      one: new FormControl(''),
      two: new FormControl('')
    });

    expect(group.controls[0].dirty).toBeFalse();
    expect(group.controls[1].dirty).toBeFalse();

    markAllAsDirty(group);

    expect(group.controls[0].dirty).toBeTrue();
    expect(group.controls[1].dirty).toBeTrue();
  });
});
