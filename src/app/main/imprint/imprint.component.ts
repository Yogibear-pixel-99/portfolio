import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from '../../shared/components/header/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer/footer.component';

@Component({
  selector: 'app-imprint',
  imports: [TranslateModule, HeaderComponent, FooterComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
 public translate = inject(TranslateService);
}
