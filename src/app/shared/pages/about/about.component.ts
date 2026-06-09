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

      new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
          slidesPerView: 4,
  spaceBetween: 70,

    autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

        
      });

    }
  }
}