import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { MaskOverlayComponent } from "./shared/components/mask-overlay/mask-overlay.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSectionComponent, MaskOverlayComponent, AboutMeComponent],
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
