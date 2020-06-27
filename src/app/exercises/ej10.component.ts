import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

// export interface HTMLInputEvent extends InputEvent {
//   target: HTMLInputElement;
// }

@Component({
  selector: 'ps-ej10',
  templateUrl: './ej10.component.html'
})
export class Ej10Component {
  @Output() textChange = new EventEmitter<string>();
  @ViewChild('ref') private input: ElementRef<HTMLInputElement>;
  // private value = '';
  // onInput(value: string){
  //   this.value = value;
  // }
  onClick(){
    const reverse = this.input.nativeElement.value.split('').reverse().join('');
    this.textChange.emit(reverse);
  }
}
