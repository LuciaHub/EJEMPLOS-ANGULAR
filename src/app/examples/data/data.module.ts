import { NgModule } from '@angular/core';
import { BindingComponent } from './binding.component';
import { FormsModule } from '@angular/forms';
import { AttrComponent } from './attr.component';
import { InputComponent } from './input.component';
import { OutputComponent } from './output.component';

@NgModule({
  declarations: [
    BindingComponent,
    AttrComponent,
    InputComponent,
    OutputComponent
  ],
  exports: [
    BindingComponent,
    AttrComponent,
    InputComponent,
    OutputComponent
  ],
  imports: [
    FormsModule
  ]
})
export class DataModule {}
