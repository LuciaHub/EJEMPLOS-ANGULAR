import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'wrap' })
export class WrapPipe implements PipeTransform {
  transform(value: string, before: string, after: string) {
    return before + value + after;
  }
}
