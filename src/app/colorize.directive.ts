import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[colorizeOnClick]'
})
export class ColorizeDirective {

  private prevColor: string = '';
  private el: HTMLElement;
  private highlighted: boolean = false;

  constructor(el: ElementRef) { 
    this.el = el.nativeElement; 
  }

  @HostListener('click') onMouseClick(): void {
    if (this.highlighted) {
      this.highlight(''), this.prevColor = '';
    } else {
      this.highlight('orange'), this.prevColor = 'orange';
    } 
    this.highlighted = !this.highlighted;
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight('grey');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
      this.highlight(this.prevColor)
  }

  private highlight(color: string): void {
    this.el.style.backgroundColor = color;
  }
}