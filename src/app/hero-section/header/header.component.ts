import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/languages/language.service';
import { MobileHeaderComponent } from "./mobile-header/mobile-header.component";

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule, MobileHeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
langService = inject(LanguageService);


}