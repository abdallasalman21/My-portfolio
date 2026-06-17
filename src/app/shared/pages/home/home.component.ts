import { isPlatformBrowser } from '@angular/common';
import { Component,AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import gsap from 'gsap';


@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit  {
    private platformId = inject(PLATFORM_ID);
  
  ngAfterViewInit(): void {
   if (!isPlatformBrowser(this.platformId)) return;

 

    }
    

}
