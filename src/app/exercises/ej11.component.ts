import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'ps-ej11',
  templateUrl: './ej11.component.html'
})
export class Ej11Component {
  @Input() foo: string;
  @Output() fooChange = new EventEmitter<string>();
  onInput(value: string){
    this.fooChange.emit(value);
  }
}
