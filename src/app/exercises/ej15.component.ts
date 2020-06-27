import { Component, Input } from '@angular/core';

@Component({
  selector: 'ps-ej15',
  templateUrl: './ej15.component.html'
})
export class Ej15Component {
  private _foo: string;
  get foo() { return this._foo; }
  @Input()
  set foo(value) {
    console.log('Me has puesto foo');
    this._foo = value;
  }
  get fooMayuscula(){
    return this.foo.toUpperCase();
  }
}
