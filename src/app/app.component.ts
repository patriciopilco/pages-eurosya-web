import { CommonModule } from '@angular/common';
import { CustomAppender } from './../../node_modules/log4js/types/log4js.d';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pages-euroya-web';
}
