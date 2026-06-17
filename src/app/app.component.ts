import { Component, Inject, PLATFORM_ID, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { isPlatformBrowser } from '@angular/common';

import { FlowbiteService } from './core/services/flowbite.service';
import { initFlowbite } from 'flowbite';
import AOS from 'aos';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'front-end-portfolio';

  constructor(
    private flowbiteService: FlowbiteService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {

      // Flowbite
      this.flowbiteService.loadFlowbite(() => {
        initFlowbite();
      });

      // AOS init
      AOS.init({
        duration: 1000,
        once: true
      });
    }
  }

  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId)) {

     
      setTimeout(() => {
        AOS.refresh();
      }, 300);

      gsap.to('.animated-bg', {
  rotation: 5,
  duration: 40,
  repeat: -1,
  yoyo: true,
  ease: 'none'
});
      gsap.to('.orb-1', {
  x: '+=250',
  y: '+=100',
  rotation: 360,
  duration: 20,
  repeat: -1,
  yoyo: true,
  ease: 'none'
});

gsap.to('.orb-2', {
  x: '-=300',
  y: '+=150',
  rotation: -360,
  duration: 25,
  repeat: -1,
  yoyo: true,
  ease: 'none'
});

gsap.to('.orb-3', {
  x: '+=200',
  y: '-=250',
  rotation: 360,
  duration: 30,
  repeat: -1,
  yoyo: true,
  ease: 'none'
});
    }
  }
  
  
}