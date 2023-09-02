import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], column: string): any[] {
    return value.sort((a, b) => (a[column] > b[column]) ? 1 : -1)
  }
}
