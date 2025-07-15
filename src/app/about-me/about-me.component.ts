import { Component, inject } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { GetInContactButtonComponent } from '../shared/components/ui/get-in-contact-button/get-in-contact-button.component';

@Component({
  selector: 'app-about-me',
  imports: [TranslateModule, GetInContactButtonComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
translate = inject(TranslateService);
}
