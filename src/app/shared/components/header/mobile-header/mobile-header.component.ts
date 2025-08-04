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
  public showMenu: boolean = false;
  public openMenu: boolean = false;

  public yellowLogo: boolean = false;

  /**
   * Opens the overlay by setting showMenu and openMenu variables to true.
   */
  public openOverlay() {
    this.showMenu = true;
    requestAnimationFrame(() => (this.openMenu = true));
  }

  /**
   * Closes the overlay by setting openMenu and showMenu variables to false.
   */
  public closeOverlay() {
    this.openMenu = false;
    setTimeout(() => (this.showMenu = false), 500);
  }

  /**
   * Sets the yellowLogo variable to true and after a timeout to false.
   */
  public logoYellow() {
    this.yellowLogo = true;
    setTimeout(() => (this.yellowLogo = false), 1000);
  }
}
