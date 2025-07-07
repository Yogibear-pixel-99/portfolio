import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { LanguageService } from '../../services/languages/language.service';
import { CommonModule } from '@angular/common';
import { CircleLinkComponent } from "../../links/circle-link/circle-link.component";
import { CircleLink } from '../../model';
@Component({
  standalone: true,
  selector: 'app-hero-section',
  imports: [HeaderComponent, CommonModule, CircleLinkComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
langService = inject(LanguageService);

helloEnterText:boolean = false;
helloEnterAnimate:boolean = false;
profilHovered:boolean = false;

hoveredLetterFirst: number | null = null;
hoveredLetterSecond: number | null = null;

circleLinks: CircleLink[] = [
  {linkImgSrc : "images/hero-section/linkedin.svg", linkHref : "https://www.linkedin.com/in/joachim-pürcher-92b249345/", imgAltText : "linkedin logo"},
  {linkImgSrc : "images/hero-section/github.svg", linkHref : "https://github.com/Yogibear-pixel-99", imgAltText : "github logo"},
  {linkImgSrc : "images/hero-section/mail.svg", linkHref : "mailto:joachim.puercher@gmail.com", imgAltText : "email logo"}
]

showName(){
setTimeout(() => this.helloEnterText = true, 150);
}

hideName(){
setTimeout(() => this.helloEnterText = false, 150);
}

}
