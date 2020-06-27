import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mask' })
export class MaskPipe implements PipeTransform {
  transform(value: string, visibleChars = 0, mask = '#') {
    return value.split('').map((char, i) => {
      if (i < visibleChars) { return char; }
      return mask;
    }).join('');
  }
}
