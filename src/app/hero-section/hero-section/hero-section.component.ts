import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { LanguageService } from '../../services/languages/language.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-hero-section',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
langService = inject(LanguageService);

helloEnterText:boolean = false;
helloEnterAnimate:boolean = false;
profilHovered:boolean = false;

hoverLetterFirst: number | null = null;
hoverLetterSecond: number | null = null;


showName(){
setTimeout(() => this.helloEnterText = true, 150);
}

hideName(){
setTimeout(() => this.helloEnterText = false, 150);

}

}
