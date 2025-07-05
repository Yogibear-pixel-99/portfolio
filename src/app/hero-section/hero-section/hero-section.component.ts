import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { LanguageService } from '../../services/languages/language.service';

@Component({
  standalone: true,
  selector: 'app-hero-section',
  imports: [HeaderComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
langService = inject(LanguageService);
}
