import { FormControl, FormGroup } from "@angular/forms"
import { markAllAsDirty } from "./mark-all-as-dirty";

describe('MarkAllAsDirty', () => {
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
});
