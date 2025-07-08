import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../shared/services/languages/language.service';
import { CommonModule } from '@angular/common';
import { LangSwitchComponent } from '../../../shared/components/lang-switch/lang-switch.component';

@Component({
  selector: 'app-mobile-header-menu',
  imports: [CommonModule, LangSwitchComponent],
  templateUrl: './mobile-header-menu.component.html',
  styleUrl: './mobile-header-menu.component.scss'
})
export class MobileHeaderMenuComponent {

  langService = inject(LanguageService);

}