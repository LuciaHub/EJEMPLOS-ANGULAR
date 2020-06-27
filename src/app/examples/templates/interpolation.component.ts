import { Component } from '@angular/core';

// podemos interpolar propiedades o métodos públicos de la clase con dos corchetes {{}}

@Component({
  selector: 'ps-interpolation',
  templateUrl: './interpolation.component.html'
})
export class InterpolationComponent {
  private name = 'Isidro';
  private surname = 'Torregrosa';

  get fullName(){
    return this.name + ' ' + this.surname;
  }
}
