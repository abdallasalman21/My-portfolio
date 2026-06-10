import {
  Component,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Swiper from 'swiper/bundle';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements AfterViewInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId)) {

setTimeout(()=>{
  new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
observer: true,
observeParents: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 2.9,
      spaceBetween: 0
    },
      480: {
      slidesPerView: 2.3,
      spaceBetween: 0
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});
},0);

    }
  }
}