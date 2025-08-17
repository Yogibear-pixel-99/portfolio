import { Component, inject } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { TechStackLogoComponent } from '../../shared/components/ui/tech-stack-logo/tech-stack-logo.component';
import { TechlogoService } from '../../shared/services/techlogo/techlogo.service';

@Component({
  selector: 'app-skill-set',
  imports: [TranslateModule, TechStackLogoComponent],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent {
  public translate = inject(TranslateService);
  public techlogoService = inject(TechlogoService);

  private stickerOpen: boolean = false;
  private activeSticker: number = 0;
  public stickerLogoEn: string[] = [
    'images/skills/sticker_close.png',
    'images/skills/sticker_middle.png',
    'images/skills/sticker_open.png',
  ];
  public stickerLogoDe: string[] = [
    'images/skills/peel_de_one.png',
    'images/skills/sticker_middle.png',
     'images/skills/peel_de_third.png',
  ];
  public get getStickerPath() {
    let lang = this.translate.currentLang;
    console.log(lang);
    if (lang === "de") {
    return this.stickerLogoDe[this.activeSticker];
    } else {
      return this.stickerLogoEn[this.activeSticker]   
      }
  }

  /**
   * Opens the sticker in the skill section by calling the specified img in the sticker array.
   */
  public openSticker() {
    if (!this.stickerOpen) {
      this.activeSticker = 1;
      setTimeout(() => {
        this.activeSticker = 2;
        this.stickerOpen = true;
      }, 200);
    }
  }

  /**
   * Closes the sticker in the skill section after a timeout.
   */
  public closeSticker() {
    if (this.stickerOpen) {
      setTimeout(() => (this.activeSticker = 1), 1500);
      setTimeout(() => {
        this.activeSticker = 0;
        this.stickerOpen = false;
      }, 1700);
    }
  }
}
