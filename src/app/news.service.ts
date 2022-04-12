import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

export interface News {
  title: string;
  contentSnippet: string;
  content: string;
  link: string;
  isoDate: string;
  enclosure?: {
    type: string;
    url: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  fetchNews(): Observable<News[]> {
      return this.http.get<News[]>('http://localhost:3001/')
  }
  
}
