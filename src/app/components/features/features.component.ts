import { Component } from '@angular/core';
import { IntersectionStatus } from '../../directives/from-intersection-observer';
import { IntersectionObserverDirective } from '../../directives/intersection-observer.directive';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-features',
  standalone: true,
  imports: [IntersectionObserverDirective,CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  status: IntersectionStatus = IntersectionStatus.NotVisible;
  constructor() {}

  onVisibilityChanged(status: IntersectionStatus) {
    this.status = status;
  }
}
