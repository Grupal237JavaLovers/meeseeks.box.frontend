import {FormControl, FormGroup, FormGroupDirective, NgForm, ValidatorFn} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';

/**
 * Custom validator functions for reactive form validation
 */
export class CustomValidators {
  /**
   * Validates that child controls in the form group are equal
   */
  static childrenEqual: ValidatorFn = (formGroup: FormGroup) => {
    const [firstControlName, otherControlNames] = Object.keys(formGroup.controls || {});
    const isValid = formGroup.get(otherControlNames).value === formGroup.get(firstControlName).value;
    return isValid ? null : {childrenNotEqual: true};
  }
}

/**
 * Custom ErrorStateMatcher which returns true (error exists) when the parent form group is invalid and the control has been touched
 */
export class ConfirmValidParentMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.parent.invalid && control.touched;
  }
}

/**
 * Collection of reusable error messages
 */

export const errorMessages: { [key: string]: string } = {
  userName: 'User name is required',
  realName: 'User name is required',
  email: 'Email must be a valid email address (username@domain)',
  confirmEmail: 'Email addresses must match',
  password: 'Password must be at least 8 characters ',
  confirmPassword: 'Passwords must match',
  // job errors
  jobName: 'Job name is required',
  description: 'Job description is required',
  location: 'Job location is required',
  type: 'Job type is required',
  price: 'Job price is required',
  expirationDate: 'Job expiration date is required',
  expirationTime: 'Job expiration time is required'
};
