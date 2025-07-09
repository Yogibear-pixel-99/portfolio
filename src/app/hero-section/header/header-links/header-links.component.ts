import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../shared/services/languages/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-links',
  imports: [CommonModule],
  templateUrl: './header-links.component.html',
  styleUrl: './header-links.component.scss'
})
export class HeaderLinksComponent {

langService = inject(LanguageService);
}
