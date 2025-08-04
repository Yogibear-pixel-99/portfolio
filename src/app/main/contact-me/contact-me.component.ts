import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FooterComponent } from '../../shared/components/footer/footer/footer.component';
import { ContactMeFormComponent } from './contact-me-form/contact-me-form.component';
import { MyLogoStickerComponent } from '../../shared/components/ui/my-logo-sticker/my-logo-sticker.component';

@Component({
  selector: 'app-contact-me',
  imports: [
    TranslateModule,
    FooterComponent,
    ContactMeFormComponent,
    MyLogoStickerComponent,
    MyLogoStickerComponent,
  ],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  public translate = inject(TranslateService);
}
