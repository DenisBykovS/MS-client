import {FormControl} from '@angular/forms';

export class MyValidators {
  static numValilidator(control: FormControl): {[key: string]: boolean} {
    const num = new RegExp(/\D/g, '');
    if (control.value === num) {
      return null;
    }
    return {isNotNumber: true};
  }
}
