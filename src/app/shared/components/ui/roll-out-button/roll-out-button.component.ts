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
  translate = inject(TranslateService);

  @Input() imgPath: string = '';
  @Input() translatePathNormal: string = '';
  @Input() translatePathHover: string = '';

  helloEnterAnimate: boolean = false;
  helloEnterText: boolean = false;

  showName() {
    setTimeout(() => (this.helloEnterText = true), 150);
  }

  hideName() {
    setTimeout(() => (this.helloEnterText = false), 150);
  }
}
