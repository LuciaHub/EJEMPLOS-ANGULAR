import { Component, Input } from '@angular/core';

@Component({
  selector: 'ps-ej9',
  templateUrl: './ej9.component.html'
})
export class Ej9Component {
  @Input() x: number;
  @Input() y: number;
}
