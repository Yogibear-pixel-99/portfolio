import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-button',
  imports: [CommonModule, TranslateModule],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.scss',
})
export class MainButtonComponent {
  public translate = inject(TranslateService);

  @Input({ required: true }) public color: string = 'dark-button';
  @Input({ required: true }) public translateText: string = '';
  @Input({ required: true }) public hrefPath: string = '';
  @Input() public target: string = '_self';
}
