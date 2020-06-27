import { Component } from "@angular/core";

@Component({
  selector: 'ps-upper',
  templateUrl: './upper.component.html'
})
export class UpperComponent {
  value = 'foo';
  date = new Date()
}
