import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

export interface ParamObj {
  dir: boolean;
  col: string;
}

@Directive({
  selector: '[appSortParams]'
})
export class SortParamsDirective {

  dateDir: boolean = true;
  titleDir: boolean = true;
  obj!: ParamObj;

  @Output() param: EventEmitter<ParamObj> = new EventEmitter();

  constructor(private element: ElementRef) { }

  @HostListener('click') onClickIcon(): void {
    this.selectSort(this.element.nativeElement.id)
  }

  selectSort(id: string): void{

    switch(id){
    case 'news_title':
      this.titleDir = !this.titleDir;
      this.obj = {dir:this.titleDir, col:"title"};
    break;
    case 'news_date':
      this.dateDir = !this.dateDir;
      this.obj = {dir:this.dateDir, col:"isoDate"};
    break;
    }

    this.param.emit(this.obj);
  }
}