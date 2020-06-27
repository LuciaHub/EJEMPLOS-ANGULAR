import {NgModule} from '@angular/core';
import { FizzBuzzComponent } from './fizz-buzz.component';
import { ExercisesComponent } from './exercises.component';
import { CommonModule } from '@angular/common';
import { Ej2Component } from './ej2.component';
import { Ej7Component } from './ej7.component';
import { Ej8Component } from './ej8.component';
import { Ej9Component } from './ej9.component';
import { Ej10Component } from './ej10.component';
import { Ej11Component } from './ej11.component';
import { MaskPipe } from './ej12.pipe';
import { AutoFocusDirective } from './ej13.directive';
import { Ej14Component } from './ej14.component';
import { Ej15Component } from './ej15.component';
import { Ej16BService } from './ej16b.service';
import { Ej16Component } from './ej16.component';

@NgModule({
  declarations: [
    FizzBuzzComponent,
    Ej2Component,
    Ej7Component,
    Ej8Component,
    Ej9Component,
    Ej10Component,
    Ej11Component,
    ExercisesComponent,
    MaskPipe,
    AutoFocusDirective,
    Ej14Component,
    Ej15Component,
    Ej16Component
  ],
  exports: [
    ExercisesComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    Ej16BService
  ]
})
export class ExercisesModule {}
