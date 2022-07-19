import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"
import { PublicNews, ReadNews } from '../types';
import moment from 'moment';

moment.locale("ru");

interface ResponseNewsListData {
  news: PublicNews[];
  totalCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(
    @Inject("server-url")
    private url: string,
    private http: HttpClient
  ) { }

  dateMapper(item: PublicNews) {
    return ({...item, publishedDate: moment(item.publishedDate).format("Do MMMM YYг.")})
  }

  public getNews(page: number): Observable<PublicNews[]> {
    return this.http.get<ResponseNewsListData>(this.url + "news/" + page + "/30").pipe(map(({ news }) => ([...news.map(this.dateMapper)])));
  }

  public getNewsItem(url: string): Observable<ReadNews> {
    return this.http.get<ReadNews>(this.url + "news/item/" + url).pipe(map(item => this.dateMapper(item) as ReadNews));
  }
}