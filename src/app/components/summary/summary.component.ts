import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../../models/article.interface';
import { ArticleComponent } from "./components/article/article.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-summary',
    standalone: true,
    templateUrl: './summary.component.html',
    styleUrl: './summary.component.scss',
    imports: [ArticleComponent, CommonModule]
})
export class SummaryComponent {

   public articlesList: Article[] = [];

  constructor(private http: HttpClient) {
      this.consumeCloudflareService();
  }

  consumeCloudflareService() {
    const url = 'https://sup-articles-get.xpoch.workers.dev';
        this.http.get(url).subscribe((response) => {
        this.articlesList = JSON.parse(JSON.stringify(response))
    }, (error) => {
      console.error(error);
    });
  }

}
