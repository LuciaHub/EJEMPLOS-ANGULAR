import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ps-output',
  templateUrl: './output.component.html'
})
export class OutputComponent {
  @Output() myEvent = new EventEmitter();
  onClick(){
    this.myEvent.emit(new Date());
  }
}
