import { Component } from '@angular/core';
import { MobileHeaderMenuComponent } from '../mobile-header-menu/mobile-header-menu.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mobile-header',
  imports: [MobileHeaderMenuComponent, CommonModule],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss',
})
export class MobileHeaderComponent {
  showMenu: boolean = false;
  openMenu: boolean = false;

  openOverlay() {
    this.showMenu = true;
    requestAnimationFrame(() => (this.openMenu = true));
  }

  closeOverlay() {
   this.openMenu = false;
   setTimeout(() => this.showMenu = false, 500);
  }
}
