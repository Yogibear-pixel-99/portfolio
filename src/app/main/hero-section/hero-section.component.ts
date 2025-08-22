import { Component, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleLinkComponent } from '../../shared/components/ui/circle-link/circle-link.component';
import { SocialLinksService } from '../../shared/services/links/social-links.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { MainButtonComponent } from '../../shared/components/ui/main-button/main-button.component';
import { RollOutButtonComponent } from '../../shared/components/ui/roll-out-button/roll-out-button.component';
import { HeaderComponent } from '../../shared/components/header/header/header.component';

@Component({
  standalone: true,
  selector: 'app-hero-section',
  imports: [
    CommonModule,
    CircleLinkComponent,
    TranslateModule,
    MainButtonComponent,
    RollOutButtonComponent,
    HeaderComponent,
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent implements AfterViewInit {
  public translate = inject(TranslateService);
  public socialLinkService = inject(SocialLinksService);
  public profilHovered: boolean = false;
  public fLetterHovered: boolean = false;
  public frontLetterHovered: number | null = null;
  public devLetterHovered: number | null = null;
  public showAllLetters: boolean = false;

  /**
   * Sets the devLetterHovered variable to the letterNr (index) from the @for HTML pattern.
   * Called when hovering over the main letters in the hero section.
   *
   * @param letterNr The index of the hovered letter or NULL if no letter is hovered.
   */
  public setDevLetterHovered(letterNr: number | null) {
    this.devLetterHovered = letterNr;
  }

  /**
   * Sets the frontLetterHovered variable to the letterNr (index) from the @for HTML pattern.
   * Called when hovering over the main letters in the hero section.
   *
   * @param letterNr The index of the hovered letter or NULL if no letter is hovered.
   */
  public setFrontLetterHovered(letterNr: number | null) {
    this.frontLetterHovered = letterNr;
  }

  /**
   *  Initialize the start animation onload or on redirect from a diffrent site.
   */
  ngAfterViewInit() {
    const animation = sessionStorage.getItem('firstAnimation');
    if (animation) {
      this.callAnimation();
    }
    window.addEventListener('load', () => {
      if (!animation) this.callAnimation();
      sessionStorage.setItem('firstAnimation', 'true');
    });
  }

  /**
   * Shows an animation for all main letters.
   */
  startAnimation() {
    this.showAllLetters = true;
    setTimeout(() => (this.showAllLetters = false), 500);
  }

  /**
   * Shows the start animation by iterate through the letters.
   */
  callAnimation() {
    let firstIndex: number;
    let secondIndex: number;
    let animateInterval: ReturnType<typeof setInterval>;
    if (this.translate.currentLang === 'en') {
      secondIndex = 8;
      firstIndex = -2;
    } else {
      secondIndex = 9;
      firstIndex = -3;
    }

    animateInterval = setInterval(() => {
      if (firstIndex === -1) {
        this.fLetterHovered = true;
      } else {
        this.fLetterHovered = false;
      }

      if (firstIndex < 8) {
        this.frontLetterHovered = firstIndex;
        this.devLetterHovered = secondIndex;
        firstIndex++;
        secondIndex--;
      } else {
        clearInterval(animateInterval);
        this.frontLetterHovered = null;
        this.devLetterHovered = null;
        this.startAnimation();
      }
    }, 350);
  }
}
