import { Component, ViewChild ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { TimeAgoPipe } from "../../pipes/time-ago.pipe";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwiperModule } from 'swiper/angular';


interface Customer {
  title: string;
  date: Date;
  text: string;
  image: string;
}

@Component({
    selector: 'app-customers',
    standalone: true,
    templateUrl: './customers.component.html',
    styleUrl: './customers.component.scss',
    imports: [TimeAgoPipe,FontAwesomeModule,SwiperModule,CommonModule],
    schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomersComponent {
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: false,
    scrollbar: { draggable: true },
    loop: true,
  };

  customers: Customer[] = [
    {
      title: 'Euroya es seguro y confiable',
      date: new Date(2023, 10, 24),
      text: `Por estudios viajo continuamente a Europa y me siento seguro con el servicio brindado al momento del cambio de moneda, mis compañeros también lo usan.`,
      image: 'assets/images/customer-1.png',
    },
    {
      title: 'Euroya es una manera rapida y facil de comprar',
      date: new Date(2024, 2, 1),
      text: `Por motivos de viaje me contacte con el representante para realizar una transacción de mi moneda y fue rápido y seguro.`,
      image: 'assets/images/customer-2.png',
    },
  ];

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  constructor() {}

  slideNext() {
    this.swiper?.swiperRef?.slideNext();
  }
  slidePrev() {
    this.swiper?.swiperRef?.slidePrev();
  }
}
