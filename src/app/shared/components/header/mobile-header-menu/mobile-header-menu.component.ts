import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangSwitchComponent } from '../../ui/lang-switch/lang-switch.component';
import { HeaderLinksComponent } from '../header-links/header-links.component';
import { SocialLinksService } from '../../../services/links/social-links.service';
import { CircleLinkComponent } from '../../ui/circle-link/circle-link.component';
import { MyLogoComponent } from "../../ui/my-logo/my-logo.component";
@Component({
  selector: 'app-mobile-header-menu',
  imports: [
    CommonModule,
    LangSwitchComponent,
    HeaderLinksComponent,
    CircleLinkComponent,
    MyLogoComponent
],
  templateUrl: './mobile-header-menu.component.html',
  styleUrl: './mobile-header-menu.component.scss',
})
export class MobileHeaderMenuComponent {
  public socialLinkService = inject(SocialLinksService);
  
  // showFlexDisplay: boolean = false;
  @Input() public  openMenu: boolean = false;
  @Input() public  showMenu: boolean = false;
  @Output() public closeMobileMenu = new EventEmitter();

  /**
   * Sets the openMenu and showMenu variable to false and calls by emit a parent funktion to close the menu.
   */
  public closeMenu() {
    this.openMenu = false;
    setTimeout(() => (this.showMenu = false), 500);
    setTimeout(() => this.closeMobileMenu.emit(), 510);
  }
}
