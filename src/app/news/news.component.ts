import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent implements OnInit {
  articleContent: string = '';
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.loadArticle();
    console.log(this.articleContent)
  }
  loadArticle(): void {
    this.http
      .get('assets/news/sample.txt', { responseType: 'text' })
      .subscribe({
        next: (data: string) => {
          this.articleContent = data;
        },
        error: (error) => {
          console.error('Lỗi khi lấy dữ liệu từ file txt:', error);
        },
      });
  }
}
