import { Component, Input, OnChanges, OnInit, /*DoCheck,*/ AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'ps-ej14',
  templateUrl: './ej14.component.html'
})
export class Ej14Component implements
  OnChanges, OnInit, /* DoCheck,*/
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {
  @Input() foo: string;
  bar = '1234';
  constructor() {
    debugger;
    console.log('constructor');
  }
  ngOnChanges(changes) {
    debugger;
    console.log('ngOnChanges', changes);
  }
  ngOnInit() {
    debugger;
    console.log('ngOnInit');
  }
  // ngDoCheck() {
  //   debugger;
  //   console.log('ngDoCheck');
  // }
  ngAfterContentInit() {
    debugger;
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    debugger;
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    debugger;
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    debugger;
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    debugger;
    console.log('ngOnDestroy');
  }
}
