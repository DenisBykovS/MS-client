import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rus',
  pure: false
})
export class RusPipe implements PipeTransform {

  transform(month: string): string {
    const months = {
      January: 'январь',
      February: 'февраль',
      March : 'март',
      April : 'апрель',
      May : 'май',
      June : 'июнь',
      July : 'июль',
      August : 'август',
      September : 'сентябрь',
      October : 'октябрь',
      November: 'ноябрь',
      December : 'декабрь'
    };
    const rus = months[month];
    return rus;
  }

}
