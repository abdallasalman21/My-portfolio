import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;

  }

  isOpen = false;

toggleMenu() {
  this.isOpen = !this.isOpen;
}

closeMenu() {
  this.isOpen = false;
}

open = false;

toggleDropdown() {
  this.open = !this.open;
}

changeColor(color: string) {
  document.documentElement.style.setProperty('--main-color', color);
  this.open = false; 
}


}
