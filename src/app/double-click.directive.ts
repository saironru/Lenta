import { Directive, ElementRef, HostListener, Component, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { News } from './news.service';

@Directive({
  selector: '[DoubleClick]'
})
export class DoubleClickDirective {

    private el: HTMLElement;

    constructor(el: ElementRef, public dialog: MatDialog) { 
      this.el = el.nativeElement; 
    }

    @Input('newsfeed') news: News[] = [];

    @HostListener('dblclick') onMouseDoubleClick() {
        let id: number = +this.el.id;
        this.dialog.open(DialogElement, {
          width: '100%',
          maxWidth: 640,
          disableClose: true,
          data: this.news[id]
        });
    }
    

}



@Component({
  selector: 'dialog-element',
  templateUrl: 'dialog-element.html',
  styleUrls: ['dialog-element.scss']
})
export class DialogElement {

  constructor(
    public dialogRef: MatDialogRef<DialogElement>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void { 
    this.dialogRef.close();
  }

}