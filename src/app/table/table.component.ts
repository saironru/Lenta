import { News } from './../news.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ParamObj } from './../sort-params.directive'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Output() eventEmitter: EventEmitter<News[]> = new EventEmitter<News[]>();
  @Input('newsfeed') news: News[] = [];

  direction: boolean = true;
  column: string  = "none";

  constructor() { }

  ngOnInit(): void {
    
  }

  setSortParams(param: ParamObj){
    this.direction = param.dir;
    this.column = param.col;
  }

}



