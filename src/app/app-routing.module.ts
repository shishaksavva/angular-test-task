import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsItemComponent } from './pages/news-item/news-item.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  {
    path: "post",
    component: NewsItemComponent
  },
  {
    path: "",
    component: NewsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
