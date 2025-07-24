import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangSwitchComponent } from '../../ui/lang-switch/lang-switch.component';
import { HeaderLinksComponent } from '../header-links/header-links.component';
import { CircleLinksService } from '../../../services/links/circle-links.service';
import { CircleLinkComponent } from '../../ui/circle-link/circle-link.component';
@Component({
  selector: 'app-mobile-header-menu',
  imports: [CommonModule, LangSwitchComponent, HeaderLinksComponent, CircleLinkComponent],
  templateUrl: './mobile-header-menu.component.html',
  styleUrl: './mobile-header-menu.component.scss'
})
export class MobileHeaderMenuComponent {

  linkService = inject(CircleLinksService);

  showFlexDisplay:boolean = false;
  @Input() openMenu:boolean = false;
  @Input() showMenu:boolean = false;

  @Output() closeMenuParent = new EventEmitter();

  closeMenu(){
    this.openMenu = false;
    setTimeout(() => this.showMenu = false, 500);
    setTimeout(() => this.closeMenuParent.emit(), 510);
  }

}