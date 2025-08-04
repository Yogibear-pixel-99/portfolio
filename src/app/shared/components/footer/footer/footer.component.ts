import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RollOutButtonComponent } from '../../ui/roll-out-button/roll-out-button.component';
import { SocialLinksService } from '../../../services/links/circle-links.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-footer',
  imports: [TranslateModule, RollOutButtonComponent, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public translate = inject(TranslateService);
  public socialLinks = inject(SocialLinksService);

  public yellowLogo: boolean = false;
}
