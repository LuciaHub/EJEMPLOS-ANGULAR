import { Component } from '@angular/core';

@Component({
  selector: 'ps-attr',
  templateUrl: './attr.component.html'
})
export class AttrComponent {
  value = '';
  get classes() {
    return {
      foo: this.value === 'foo',
      bar: this.value === 'bar'
    };
  }

  onInput(value: string){
    this.value = value;
  }
}
