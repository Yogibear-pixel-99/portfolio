import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileHeaderComponent } from '../mobile-header/mobile-header.component';
import { LangSwitchComponent } from '../../ui/lang-switch/lang-switch.component';
import { HeaderLinksComponent } from '../header-links/header-links.component';
import { MyLogoComponent } from '../../ui/my-logo/my-logo.component';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [
    CommonModule,
    MobileHeaderComponent,
    LangSwitchComponent,
    HeaderLinksComponent,
    MyLogoComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() public linkColor: string[] = [];
  @Input() public langSwitchTxtColor: string = '';
  @Output() public logoClicked = new EventEmitter();

  /**
   * Emits the click to the parent component.
   */
  public sendClickToNextParent() {
    this.logoClicked.emit();
  }
}
