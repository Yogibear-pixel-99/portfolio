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
  @Input() public linkColor: string[] = [];
  public translate = inject(TranslateService);

  public clickedLinkIndex: number | null = null;

  /**
   * Sets the clickedLinkIndex variable to the pos parameter and after a timeout back to null.
   *
   * @param pos The number (position) of the clicked link.
   */
  public setLinkIndex(pos: number) {
    this.clickedLinkIndex = pos;
    setTimeout(() => (this.clickedLinkIndex = null), 500);
  }

  /**
   * Checks the active language from the ngx/translate module.
   *
   * @returns The active language string "de" / "en".
   */
  public checkLang() {
    return this.translate.currentLang;
  }

  /**
   * Gets the color code by checking the linkPos parameter number.
   *
   * @param linkPos The position from the link in the component.
   * @returns The color code by comparing the 'black' string with the position in the linkColor array.
   */
  public getLinkColor(linkPos: number) {
    if (this.linkColor[linkPos] === 'black') {
      return '#0E1013';
    } else {
      return '#F8F9FA';
    }
  }
}
