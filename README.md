# Form Helpers

![GitHub](https://img.shields.io/github/license/jhacobs/ngx-form-helpers)

This package contains helper methods for Angular Reactive Forms.
  
## Installation

The Form Helpers can be installed with npm:

```bash
  npm install ngx-form-helpers
```

## Helpers

- setControlAsValid
- setControlAsInvalid
- getAllErrors
- getAllFieldNames
- markAllAsDirty

## Validators

- dutchPostalCode
- ibanValidator
- mustMatchValidator
- customPatternValidator
- dutchPhoneValidator
- requiredIfValidator
- numberValidator
- floatValidator
- booleanValidator

## Usage/Examples

### Set control as valid

```typescript
import { setControlAsValid } from 'ngx-form-helpers';

const control = new FormControl('invalid', Validators.email);

setControlAsValid(control);
```

### Set control as invalid

```typescript
import { setControlAsInvalid } from 'ngx-form-helpers';

const control = new FormControl('invalid', Validators.email);

setControlAsInvalid(control);
```

### Get all form group errors

```typescript
import { getAllErrors } from 'ngx-form-helpers';

const group = new FormGroup({
  one: new FormControl('', Validators.required),
  two: new FormControl('', Validators.required)
});

getAllErrors(group) // { one: { 'required': true }, two: { 'required': true } }
```

### Get all form group field names

```typescript
import { getAllFieldNames } from 'ngx-form-helpers';

const group = new FormGroup({
  one: new FormControl(''),
  two: new FormControl('')
});

getAllFieldNames(group) // [ 'one', 'two' ]
```

### Mark all form group control as dirty

```typescript
import { markAllAsDirty } from 'ngx-form-helpers';

const group = new FormGroup({
  one: new FormControl(''),
  two: new FormControl('')
});

markAllAsDirty(group);

group.get('one').dirty // true
group.get('two').dirty // true
```

### Dutch postalcode validator

```typescript
import { dutchPostalCode } from 'ngx-form-helpers';

const control = new FormControl('1234KM', dutchPostalCode);
```

### Dutch iban validator

```typescript
import { ibanValidator } from 'ngx-form-helpers';

const control = new FormControl('NL44RABO0123456789', ibanValidator);
```

### Must match validator

```typescript
import { mustMatchValidator } from 'ngx-form-helpers';

const group = new FormGroup({
  one: new FormControl('one'),
  two: new FormControl('one')
}, { validators: mustMatchValidator('one', 'two') });

group.valid // True
```

### Custom pattern validator

```typescript
import { customPatternValidator } from 'ngx-form-helpers';

const control = new FormControl(12, /([A-Z])\w+/, { customError: true });

control.errors // { customError: true }
```
### Dutch phone number

```typescript
import { dutchPhoneValidator } from ' ngx-form-helpers';

const control = new FormControl('0612345678', dutchPhoneValidator);
```

### Required if validator

```typescript
import { requiredIfValidator } from 'ngx-form-helpers';

const group = new FormControl({
  one: new FormControl(''),
  two: new FormControl('Test')
}, { validators: requiredIfValidator('one', 'two') });

group.valid // False
```

### Number validator

```typescript
import { numberValidator } from 'ngx-form-helpers';

const control = new FormControl(12, numberValidator);
```

### Float validator

```typescript
import { floatValidator } from 'ngx-form-helpers';

const control = new FormControl(12.6, floatValidator);
```

### Boolean

```typescript
import { booleanValidator } from 'ngx-form-helpers';

const control = new FormControl(true, booleanValidator);
```

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd form-helpers
```

Install dependencies

```bash
  npm install
```
  
## Running Tests

You can run the tests with:

```bash
  npm run test
```

  
## License

[MIT](https://choosealicense.com/licenses/mit/)

