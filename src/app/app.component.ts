import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { MaskOverlayComponent } from "./shared/components/mask-overlay/mask-overlay.component";
import { AboutMeComponent } from "./about-me/about-me.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSectionComponent, MaskOverlayComponent, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
