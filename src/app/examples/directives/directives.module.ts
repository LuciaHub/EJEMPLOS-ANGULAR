import { NgModule } from '@angular/core';
import { DirectivesComponent } from './directives.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    DirectivesComponent,
    HighlightDirective
  ],
  exports: [
    DirectivesComponent
  ]
})
export class DirectivesModule {}
