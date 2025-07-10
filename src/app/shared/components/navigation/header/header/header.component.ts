import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../../services/languages/language.service';
import { MobileHeaderComponent } from '../mobile-header/mobile-header.component';
import { LangSwitchComponent } from '../../../ui/lang-switch/lang-switch.component';
import { HeaderLinksComponent } from '../header-links/header-links.component';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule, MobileHeaderComponent, LangSwitchComponent, HeaderLinksComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
langService = inject(LanguageService);


}