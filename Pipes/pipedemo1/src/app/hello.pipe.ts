import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hello',
  standalone: true
})
export class HelloPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
