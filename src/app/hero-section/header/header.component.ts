import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/languages/language.service';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
langService = inject(LanguageService);

changeLang(){
  this.langService.lang === "de" ? this.langService.lang = "en" : this.langService.lang = "de";
}
}