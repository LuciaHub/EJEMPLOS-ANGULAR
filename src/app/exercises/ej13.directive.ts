import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[psAutoFocus]'
})
export class AutoFocusDirective implements AfterViewInit {
  constructor(private ref: ElementRef<HTMLElement>) { }
  ngAfterViewInit() {
    this.ref.nativeElement.focus();
  }
}
