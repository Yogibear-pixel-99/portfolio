import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from '../../shared/components/header/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer/footer.component';

@Component({
  selector: 'app-data-save',
  imports: [TranslateModule, HeaderComponent, FooterComponent],
  templateUrl: './data-save.component.html',
  styleUrl: './data-save.component.scss'
})
export class DataSaveComponent {
 public translate = inject(TranslateService);
}
