import { News, NewsService } from './news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

newsfeed: News[] = [];
isDisableControl: boolean = true;

constructor(private newsService: NewsService) {}

ngOnInit(): void {
  this.getNews();
}

getNews(): void {
  this.isDisableControl = true;
  this.newsService.fetchNews().subscribe((data:any) => {
    this.newsfeed = data;
     console.log(this.newsfeed);
    this.isDisableControl = false;
  }); 
}

}
