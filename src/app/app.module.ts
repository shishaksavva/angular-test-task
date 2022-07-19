import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsItemComponent } from './pages/news-item/news-item.component';
import { HttpClientModule } from '@angular/common/http'
import { NewsService } from './services/news.service';
import { UiModule } from './ui/ui.module';
import { AddNewsFormComponent } from './components/add-news-form/add-news-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsItemComponent,
    AddNewsFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UiModule,
  ],
  providers: [
    { useValue: "https://webapi.autodoc.ru/api/", provide: "server-url" },
    NewsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
