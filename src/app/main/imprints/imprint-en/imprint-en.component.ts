import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../../shared/components/header/header/header.component";
import { FooterComponent } from "../../../shared/components/footer/footer/footer.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint-en',
  imports: [HeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './imprint-en.component.html',
  styleUrl: './imprint-en.component.scss'
})
export class ImprintEnComponent {

translate = inject(TranslateService);

}
