import { Component, inject } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { MainButtonComponent } from '../../shared/components/ui/main-button/main-button.component';

@Component({
  selector: 'app-about-me',
  imports: [TranslateModule, MainButtonComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  public translate = inject(TranslateService);
}
