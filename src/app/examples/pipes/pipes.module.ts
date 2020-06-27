import { NgModule } from '@angular/core';
import { UpperComponent } from './upper.component';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './reverse.pipe';
import { WrapPipe } from './wrap.pipe';

@NgModule({
  declarations: [
    UpperComponent,
    ReversePipe,
    WrapPipe
  ],
  exports: [
    UpperComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule {}
