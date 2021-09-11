import { FormGroup } from "@angular/forms";

export const markAllAsDirty = (group: FormGroup): void => {
  Object.values(group.controls).forEach((control) => control.markAsDirty());
}
