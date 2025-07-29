import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RollOutButtonComponent } from '../../ui/roll-out-button/roll-out-button.component';
import { FooterLinkData } from '../../../interfaces/model';
@Component({
  selector: 'app-footer',
  imports: [TranslateModule, RollOutButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  translate = inject(TranslateService)

  linkInfos: FooterLinkData[] = [
    {
      text : "Github",
      imgPath : "images/footer/footer_mail_logo.svg",
    },
    {
      text : "LinkedIn",
      imgPath : "images/footer/footer_git_logo.svg",
    },
    {
      text : "Email",
      imgPath : "images/footer/footer_linkedin_logo.svg",
    },

  ]

}
