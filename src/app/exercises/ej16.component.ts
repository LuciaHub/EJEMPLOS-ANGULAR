import { Component } from '@angular/core';
import { Ej16AService } from './ej16a.service';
import { Ej16BService } from './ej16b.service';

@Component({
  selector: 'ps-ej16',
  template: '<div>Ej16</div>',
  providers: [Ej16AService]
})
export class Ej16Component {
  constructor(private serviceA: Ej16AService, private serviceB: Ej16BService){}
}
