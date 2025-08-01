import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header-links',
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './header-links.component.html',
  styleUrl: './header-links.component.scss',
})
export class HeaderLinksComponent {
  translate = inject(TranslateService);
  clickedLinkIndex: number | null = null;

  @Input() linkColor: string[] = [];

  setLinkIndex(pos: number) {
    this.clickedLinkIndex = pos;
    setTimeout(() => (this.clickedLinkIndex = null), 500);
  }

  checkLang() {
    return this.translate.currentLang;
  }

  getLinkColor(linkPos: number){
    if (this.linkColor[linkPos] === "black") {
      return "#0E1013"
    } else {
      return "#F8F9FA";
    }
  }
}
