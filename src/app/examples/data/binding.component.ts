import { Component } from '@angular/core';

@Component({
  selector: 'ps-binding',
  templateUrl: './binding.component.html'
})
export class BindingComponent {
  value1 = 'Value1';
  value2 = 'Value2';
  value3 = 'Value3';
  value4 = 'Value4';
  onInput2(event: InputEvent) {
    this.value2 = (event.target as HTMLInputElement).value;
  }
}
