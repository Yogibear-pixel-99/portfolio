import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from "./hero-section/hero-section/hero-section.component";
import { MaskOverlayComponent } from "./shared/components/mask-overlay/mask-overlay.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSectionComponent, MaskOverlayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
