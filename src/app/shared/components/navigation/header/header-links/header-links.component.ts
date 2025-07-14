import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-header-links',
  imports: [CommonModule, TranslateModule],
  templateUrl: './header-links.component.html',
  styleUrl: './header-links.component.scss',
})
export class HeaderLinksComponent {

  translate = inject(TranslateService);

  clickedLinkIndex: number | null = null;

  setLinkIndex(pos: number) {
    this.clickedLinkIndex = pos;
    // setTimeout(() => navigate to site pos, 0.5);
    setTimeout(() => (this.clickedLinkIndex = null), 500);
  }

  checkLang(){
    return this.translate.currentLang;
  }
}
