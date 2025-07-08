import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/languages/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lang-switch',
  imports: [CommonModule],
  templateUrl: './lang-switch.component.html',
  styleUrl: './lang-switch.component.scss'
})
export class LangSwitchComponent {
langService = inject(LanguageService);
}
