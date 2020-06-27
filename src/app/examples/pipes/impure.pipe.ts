import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'join', pure: false})
export class MaskPipe implements PipeTransform {
  transform(value: any[]) {
    return value.join('');
  }
}

/**
  this.arr = [1,2,3]
  arr | join   -> '123'

  por defecto -> pure: true se evalua sólo cuando se reasigna el valor
  this.arr.push(4)
  '123'
  this.arr = [...this.arr, 4]
  '1234'

  pure: false se evalua cada vez que se repinte el componente
  this.arr.push(4)
  '1234'
 */
