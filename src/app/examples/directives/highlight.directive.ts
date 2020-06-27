import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[psHighlight]'
})
export class HighlightDirective {
  @Input('psHighlight') color: string;
  @Input() textColor = 'black';
  constructor(private el: ElementRef) { }
  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.color;
    this.el.nativeElement.style.color = this.textColor;
  }
}
