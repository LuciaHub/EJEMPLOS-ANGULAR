import { Component, Input } from '@angular/core';

@Component({
  selector: 'ps-input',
  templateUrl: './input.component.html'
})
export class InputComponent {
  @Input() name = '';
  @Input() surname = '';
  @Input('foo-bar') fooBar = '';
}
