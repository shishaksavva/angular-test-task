import { AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News, PublicNews } from 'src/app/types';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, DoCheck, AfterViewChecked {

  public openModal = false;

  public publicNews: PublicNews[] = [];
  public userNews: News[] = [];
  public loading: boolean = false;

  @ViewChild('container', { static: false })
  container?: ElementRef

  private count: number = 1;

  constructor(private newsService: NewsService) { 
    this.onScroll = this.onScroll.bind(this);
  }

  load() {
    this.loading = true;
    this.newsService.getNews(this.count).subscribe(items => {
      this.publicNews.push(...items);
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.load();

    this.userNews = JSON.parse(localStorage.getItem('user-news') || '[]');
  }

  onScroll(e: Event) {
    if (!this.container || this.loading) return;
    const { scrollHeight, scrollTop, clientHeight } = (this.container.nativeElement as HTMLDivElement);

    if (scrollHeight - scrollTop <= clientHeight + 400) {
      this.load();
    }
  }

  ngDoCheck(): void {
    if (!this.container) return;
    (this.container.nativeElement as HTMLDivElement).removeEventListener('scroll', this.onScroll);
  }

  ngAfterViewChecked(): void {
    if (!this.container) return;
    (this.container.nativeElement as HTMLDivElement).addEventListener('scroll', this.onScroll);
  }

  addPost(post: News) {
    this.userNews = [post, ...this.userNews];
  }
}
