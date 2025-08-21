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
  public overlayOpen: boolean = false;

  public sentMessage: boolean = false;

  /**
   * Opens the message info and display the sent success.
   */
  public triggerMessageSuccess() {
    this.sentMessage = true;
    this.openMessageMenu();
  }

  /**
   * Opens the message info and display an error.
   */
  public triggerMessageError() {
    this.sentMessage = false;
    this.openMessageMenu();
  }

  /**
   * Opens the message info overlay and triggers the hand animation.
   */
  private openMessageMenu() {
    this.overlayOpen = true;
    document.body.classList.add('no-scroll');
    this.messageMenuOpen = true;
    setTimeout(() => (this.showMessageMenu = true), 100);
    setTimeout(() => (this.waveMessageHand = true), 350);
  }

  /**
   * Closes the overlay message info and reset all vars to default.
   */
  public closeMessageMenu() {
    this.waveMessageHand = false;
    this.showMessageMenu = false;
    setTimeout(() => (this.messageMenuOpen = false), 350);
    setTimeout(() => (this.overlayOpen = false), 350);
    setTimeout(() => document.body.classList.remove('no-scroll'), 350);
  }
}
