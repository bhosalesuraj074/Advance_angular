import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, search: string, end?: string): any {
    //console.log('obj', value, '\n s', search);
    let s = value.filter((item: any) => {
      let temp = item.name.toLowerCase();
      if (end == null) {
        return temp.includes(search);
      } else {
        return temp.includes(search) && item.name.endsWith(end);
      }
    });
    return s;
  }
}
