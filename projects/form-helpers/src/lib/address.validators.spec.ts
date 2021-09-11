import { FormControl } from "@angular/forms";
import { dutchPostalCode } from "./address.validators";

describe('AddressValidators', () => {
  it('the dutch postalcode validator should check if the input value is a valid dutch postalcode', () => {
    const validControl = new FormControl('2342KM', dutchPostalCode);
    const invalidControl = new FormControl('5344KMM', dutchPostalCode);

    expect(validControl.valid).toBeTrue();
    expect(invalidControl.valid).toBeFalse();
  });
});
