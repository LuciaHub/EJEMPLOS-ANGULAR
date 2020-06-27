import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ExamplesModule } from './examples/examples.module';
import { ExercisesModule } from './exercises/exercises.module';
@NgModule({
  // elementos que vamos a utilizar dentro del módulo
  declarations: [
    AppComponent
  ],
  // módulos que vamos a utilizar
  imports: [
    BrowserModule,
    CommonModule,
    ExamplesModule,
    ExercisesModule
  ],
  // componente de entrada de este módulo
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
