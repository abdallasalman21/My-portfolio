import { Component, Inject, PLATFORM_ID, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { isPlatformBrowser } from '@angular/common';

import { FlowbiteService } from './core/services/flowbite.service';
import { initFlowbite } from 'flowbite';
import AOS from 'aos';

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
    }
  }
}