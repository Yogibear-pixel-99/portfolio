import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FooterComponent } from '../../shared/components/footer/footer/footer.component';
import { ContactMeFormComponent } from './contact-me-form/contact-me-form.component';
import { MyLogoStickerComponent } from '../../shared/components/ui/my-logo-sticker/my-logo-sticker.component';
import { FormSentInfoComponent } from '../../shared/components/ui/form-sent-info/form-sent-info.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-me',
  imports: [
    TranslateModule,
    FooterComponent,
    ContactMeFormComponent,
    MyLogoStickerComponent,
    MyLogoStickerComponent,
    FormSentInfoComponent,
    CommonModule,
  ],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  public translate = inject(TranslateService);
  public messageMenuOpen: boolean = false;
  public showMessageMenu: boolean = false;
  public waveMessageHand: boolean = false;

  sentMessage: boolean = false;


  public triggerMessageSuccess() {
    this.sentMessage = true;
    this.openMessageMenu();
  }


  public triggerMessageError() {
    this.sentMessage = false;
    this.openMessageMenu();
  }


  private openMessageMenu() {
    this.messageMenuOpen = true;
    setTimeout(() => (this.showMessageMenu = true), 100);
    setTimeout(() => (this.waveMessageHand = true), 1000);
  }

}
