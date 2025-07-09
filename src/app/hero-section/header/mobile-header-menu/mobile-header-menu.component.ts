import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../shared/services/languages/language.service';
import { CommonModule } from '@angular/common';
import { LangSwitchComponent } from '../../../shared/components/lang-switch/lang-switch.component';
import { HeaderLinksComponent } from '../header-links/header-links.component';
import { LinksService } from '../../../shared/services/links/links.service';
import { CircleLinkComponent } from '../../../shared/components/circle-link/circle-link.component';
@Component({
  selector: 'app-mobile-header-menu',
  imports: [CommonModule, LangSwitchComponent, HeaderLinksComponent, CircleLinkComponent],
  templateUrl: './mobile-header-menu.component.html',
  styleUrl: './mobile-header-menu.component.scss'
})
export class MobileHeaderMenuComponent {

  langService = inject(LanguageService);
  linkService = inject(LinksService);

}