import { Component, Input } from '@angular/core';
import { Article } from '../../../../models/article.interface';


@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  @Input() article!: Article;
}
