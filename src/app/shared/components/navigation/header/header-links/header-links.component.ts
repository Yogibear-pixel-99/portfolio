import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../services/languages/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-links',
  imports: [CommonModule],
  templateUrl: './header-links.component.html',
  styleUrl: './header-links.component.scss'
})
export class HeaderLinksComponent {

langService = inject(LanguageService);

clickedLinkIndex: number | null = null;

setLinkIndex(pos: number){
  this.clickedLinkIndex = pos;
  // setTimeout(() => navigate to site pos, 0.5);
  setTimeout(() => this.clickedLinkIndex = null, 500);
}

}
