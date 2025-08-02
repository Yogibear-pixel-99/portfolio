import { Component } from '@angular/core';
import { MobileHeaderMenuComponent } from '../mobile-header-menu/mobile-header-menu.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-mobile-header',
  imports: [MobileHeaderMenuComponent, CommonModule, RouterLink],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss',
})
export class MobileHeaderComponent {
  showMenu: boolean = false;
  openMenu: boolean = false;

   yellowLogo:boolean = false;

  openOverlay() {
    this.showMenu = true;
    requestAnimationFrame(() => (this.openMenu = true));
  }

  closeOverlay() {
   this.openMenu = false;
   setTimeout(() => this.showMenu = false, 500);
  }

  logoYellow(){
    this.yellowLogo = true;
    setTimeout(() => this.yellowLogo = false, 1000);
  }
}
