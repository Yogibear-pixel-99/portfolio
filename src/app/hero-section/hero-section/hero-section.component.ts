import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  standalone: true,
  selector: 'app-hero-section',
  imports: [HeaderComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

}
