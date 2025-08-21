import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-switch',
  imports: [CommonModule],
  templateUrl: './lang-switch.component.html',
  styleUrl: './lang-switch.component.scss',
})
export class LangSwitchComponent {
  @Input() public langSwitchTxtColor: string = '#F8F9FA';
  public translate = inject(TranslateService);

  /**
   * Changes the language by changing the string in the ngx/translate module and saves the user choice.
   *
   * @param lang The language string "de"/"en".
   */
  public changeLang(lang: string) {
    localStorage.setItem('usedLang', lang);
    this.translate.use(lang);
  }

  /**
   * Checks the activated language in the ngx/translate module.
   *
   * @returns The current lang by string "de"/"en".
   */
  public checkLang() {
    return this.translate.currentLang;
  }
}
