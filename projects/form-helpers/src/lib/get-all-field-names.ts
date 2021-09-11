import { FormGroup } from "@angular/forms";

export const getAllFieldNames = (group: FormGroup): string[] => {
  return Object.keys(group);
}
