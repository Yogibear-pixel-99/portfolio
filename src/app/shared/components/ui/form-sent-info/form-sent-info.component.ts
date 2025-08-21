import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-form-sent-info',
  imports: [TranslateModule],
  templateUrl: './form-sent-info.component.html',
  styleUrl: './form-sent-info.component.scss',
})
export class FormSentInfoComponent {
  public translate = inject(TranslateService);
  @Input({ required: true }) public sentSuccess: boolean = false;
  @Input({ required: true }) public showHand: boolean = false;
  @Output() public closeSentMessageMenu = new EventEmitter();
  public overlayOpen: boolean = false;

  /**
   * Closes the message menu.
   */
  public closeSentMessage() {
    this.closeSentMessageMenu.emit();
  }
}
