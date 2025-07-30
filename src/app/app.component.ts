import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaskOverlayComponent } from "./shared/components/mask-overlay/mask-overlay.component";
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './shared/components/header/header/header.component';
import { FooterComponent } from './shared/components/footer/footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaskOverlayComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private translate: TranslateService){
    this.translate.addLangs(['de', 'en']);
  this.translate.setDefaultLang('en');
  this.translate.use('en');
  }
  title = 'portfolio';
}
