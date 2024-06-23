import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customhello',
  standalone: true
})
export class CustomhelloPipe implements PipeTransform {

  transform(gender: any): string {
    if (gender == 0){
      return 'Male';
      }
    return 'Female';
  }

}
