import { FormControl, FormGroup } from "@angular/forms";
import { getAllFieldNames } from "./get-all-field-names";

describe('GetAllFieldNames', () => {
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
});
