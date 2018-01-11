import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mutiple'
})
export class MutiplePipe implements PipeTransform {

  transform(value: number, args:number=1): any {
    return value * args;
  }

}
