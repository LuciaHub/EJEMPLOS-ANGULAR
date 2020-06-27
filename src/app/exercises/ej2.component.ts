import { Component } from '@angular/core';

@Component({
  selector: 'ps-ej2',
  templateUrl: './ej2.component.html'
})
export class Ej2Component {
  value = 'Foo';
  // onInput(event: InputEvent){
  //   this.value = (event.target as HTMLInputElement).value;
  // }
  onInput(value: string){
    this.value = value;
  }
  reset(){
    this.value = '';
  }
}
