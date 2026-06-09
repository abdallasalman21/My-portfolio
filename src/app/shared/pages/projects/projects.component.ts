import { Component , Inject,
  PLATFORM_ID,
  AfterViewInit
 } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isPlatformBrowser } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit {

    constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
ngAfterViewInit():void {

      if (isPlatformBrowser(this.platformId)) {
        gsap.from('.image img', {
  scale: 1.2,
  opacity: 0,
  duration: 1.5,
  stagger: 0.2,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.projects',
    start: 'top 80%'
  }
});

gsap.from('.p-6', {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.15,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.projects',
    start: 'top 80%'
  }
});
      }
  
}
}
