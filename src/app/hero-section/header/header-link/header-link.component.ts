import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../shared/services/languages/language.service';

@Component({
  selector: 'app-header-link',
  imports: [],
  templateUrl: './header-link.component.html',
  styleUrl: './header-link.component.scss'
})
export class HeaderLinkComponent {
langService = inject(LanguageService);
}
