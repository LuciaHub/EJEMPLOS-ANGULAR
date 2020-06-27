import { Component } from '@angular/core';

@Component({
  templateUrl: './fizz-buzz.component.html',
  selector: 'ps-fizz-buzz'
})
export class FizzBuzzComponent {
  numbers = [1, 2, 4, 3, 9, 5, 7, 6, 8];
  isEven(num: number) {
    return num % 2 === 0;
  }
  getSound(num: number) {
    if (this.isEven(num)) {
      return 'Fizz';
    }
    return 'Buzz';
  }
}
