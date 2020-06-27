import {Component} from '@angular/core';

@Component({
  // tag del componente
  selector: 'ps-app',
  // html del componente
  templateUrl: './app.component.html',
  // coleccion de estilos que va a utilizar ese componente
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  onMyEvent(value: Date){
    console.log(value);
  }
}
