import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../../models/article.interface';
import { ArticleComponent } from "./components/article/article.component";
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
    selector: 'app-summary',
    standalone: true,
    templateUrl: './summary.component.html',
    styleUrl: './summary.component.scss',
    imports: [ArticleComponent, CommonModule,SwiperModule]
})
export class SummaryComponent {

   public articlesList: Article[] = [];
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
    config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: false,
    scrollbar: { draggable: true },
    loop: true,
  };
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
