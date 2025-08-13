import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-roll-out-button',
  imports: [CommonModule, TranslateModule],
  templateUrl: './roll-out-button.component.html',
  styleUrl: './roll-out-button.component.scss',
})
export class RollOutButtonComponent {
  public translate = inject(TranslateService);

  @Input({ required: true }) public  linkHref: string = '';
  @Input({ required: true }) public  imgPath: string = '';
  @Input({ required: true }) public  translatePathNormal: string = '';
  @Input({ required: true }) public  translatePathHover: string = '';
  @Input({ required: true }) public  buttonType: string = '';
  @Input({ required: true }) public  animateType: string = '';
  @Input({ required: true }) public  externalLink: boolean = false;

  public helloEnterAnimate: boolean = false;
  public helloEnterText: boolean = false;

  /**
   * Shows the hello text by setting helloEnterText variable to true.
   */
  public showName() {
    setTimeout(() => (this.helloEnterText = true), 150);
  }

  /**
   * Hides the hello text by setting helloEnterText variable to false.
   */
  public hideName() {
    setTimeout(() => (this.helloEnterText = false), 150);
  }

  /**
   * Sets a timeout to open an extern link. Special for mobile touch clicks.
   * 
   * @param link 
   */
 public visitExternLink(link: string) {
    setTimeout(() => open(link), 1000);
  }
}
