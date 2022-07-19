import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { ReadNews } from 'src/app/types';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  public loading: boolean = true;
  public post!: ReadNews;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.newsService.getNewsItem(params['url']).subscribe(post => {
        this.post = post;
        this.loading = false;  
      });
    });
  }
}
