import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileHeaderComponent } from '../mobile-header/mobile-header.component';
import { LangSwitchComponent } from '../../ui/lang-switch/lang-switch.component';
import { HeaderLinksComponent } from '../header-links/header-links.component';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [
    CommonModule,
    MobileHeaderComponent,
    LangSwitchComponent,
    HeaderLinksComponent,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() public linkColor: string[] = [];
  @Input() public langSwitchTxtColor: string = '';

  public yellowLogo: boolean = false;

  /**
   * Sets the yellowLogo variable to true and after a timeout to false again.
   */
  public logoYellow() {
    this.yellowLogo = true;
    setTimeout(() => (this.yellowLogo = false), 1000);
  }
}
