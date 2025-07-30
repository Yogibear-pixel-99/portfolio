import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RollOutButtonComponent } from '../../ui/roll-out-button/roll-out-button.component';
import { SocialLinksService } from '../../../services/links/circle-links.service';
@Component({
  selector: 'app-footer',
  imports: [TranslateModule, RollOutButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  translate = inject(TranslateService);
  socialLinks = inject(SocialLinksService);

 getImprint (): string {
    return "imprint-" + this.translate.currentLang;
  }
  
}
