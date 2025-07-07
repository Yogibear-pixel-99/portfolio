import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../services/languages/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-header-menu',
  imports: [CommonModule],
  templateUrl: './mobile-header-menu.component.html',
  styleUrl: './mobile-header-menu.component.scss'
})
export class MobileHeaderMenuComponent {

  langService = inject(LanguageService);

}