import { Component, inject, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RollOutButtonComponent } from '../../ui/roll-out-button/roll-out-button.component';
import { SocialLinksService } from '../../../services/links/social-links.service';
import { Router, RouterLink } from '@angular/router';
import { MyLogoComponent } from '../../ui/my-logo/my-logo.component';
@Component({
  selector: 'app-footer',
  imports: [
    TranslateModule,
    RollOutButtonComponent,
    RouterLink,
    MyLogoComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public translate = inject(TranslateService);
  public socialLinks = inject(SocialLinksService);
  private router = inject(Router);
  @Input({required : true}) public showTop:boolean = true;

  /**
   * Navigates to the top of the Homepage.
   */
  public navigateToTop() {
    this.router.navigate(['/']);
  }
}
