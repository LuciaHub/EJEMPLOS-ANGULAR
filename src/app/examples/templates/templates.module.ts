import { NgModule } from '@angular/core';
import { ConditionalComponent } from './conditional.component';
import { InterpolationComponent } from './interpolation.component';
import { ListComponent } from './list.component';
import { CommonModule } from '@angular/common';
import { ChildrenComponent } from './children.component';

@NgModule({
  declarations: [
    ConditionalComponent,
    InterpolationComponent,
    ListComponent,
    ChildrenComponent
  ],
  exports: [
    ConditionalComponent,
    InterpolationComponent,
    ListComponent,
    ChildrenComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TemplatesModule {}
