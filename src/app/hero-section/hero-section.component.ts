import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../shared/components/navigation/header/header/header.component";
import { LanguageService } from '../shared/services/languages/language.service';
import { CommonModule } from '@angular/common';
import { CircleLinkComponent } from '../shared/components/ui/circle-link/circle-link.component';
import { LinksService } from '../shared/services/links/links.service';

@Component({
  standalone: true,
  selector: 'app-hero-section',
  imports: [HeaderComponent, CommonModule, CircleLinkComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
langService = inject(LanguageService);
linkService = inject(LinksService);

helloEnterText:boolean = false;
helloEnterAnimate:boolean = false;
profilHovered:boolean = false;

hoveredLetterFirst: number | null = null;
hoveredLetterSecond: number | null = null;

showName(){
setTimeout(() => this.helloEnterText = true, 150);
}

hideName(){
setTimeout(() => this.helloEnterText = false, 150);
}

}
