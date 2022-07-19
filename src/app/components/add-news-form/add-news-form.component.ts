import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import moment from 'moment';
import { Observable } from 'rxjs';
import { News } from 'src/app/types';

@Component({
  selector: 'app-add-news-form',
  templateUrl: './add-news-form.component.html',
  styleUrls: ['./add-news-form.component.scss']
})
export class AddNewsFormComponent implements OnInit {

  @Output()
  public close = new EventEmitter();

  @Output()
  public add = new EventEmitter<News>();

  public post: News = {
    title: "",
    titleImageUrl: "",
    description: "",
    publishedDate: moment().format("Do MMMM YY")
  }

  constructor() { }

  ngOnInit(): void {
  }

  getImage() {
    const input = document.createElement('input');

    input.type="file"

    input.oninput = (e) => this.readFile((input.files as any)[0]);

    input.click();
  }

  readFile(file: File) {
    const reader = new FileReader();

    reader.onload = () => this.post.titleImageUrl = reader.result as string;
    
    reader.onerror = () => alert("Ошибка при чтении файла");
    
    reader.readAsDataURL(file)
  }

  save() {
    const userNews: News[] = JSON.parse(localStorage.getItem("user-news") || '[]');

    localStorage.setItem('user-news', JSON.stringify([this.post, ...userNews]));

    this.add.emit(this.post);

    this.post = {
      title: '',
      titleImageUrl: '',
      description: '',
      publishedDate: moment().format("Do MMMM YYг.")
    }
  }
}
