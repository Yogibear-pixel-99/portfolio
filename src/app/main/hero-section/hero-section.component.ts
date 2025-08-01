import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleLinkComponent } from '../../shared/components/ui/circle-link/circle-link.component';
import { SocialLinksService } from '../../shared/services/links/circle-links.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { MainButtonComponent } from "../../shared/components/ui/main-button/main-button.component";
import { RollOutButtonComponent } from "../../shared/components/ui/roll-out-button/roll-out-button.component";
import { HeaderComponent } from '../../shared/components/header/header/header.component';

@Component({
  standalone: true,
  selector: 'app-hero-section',
  imports: [CommonModule, CircleLinkComponent, TranslateModule, MainButtonComponent, RollOutButtonComponent, HeaderComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
translate = inject(TranslateService);
socialLinkService = inject(SocialLinksService);

profilHovered:boolean = false;

fLetterHovered: boolean = false;
frontLetterHovered: number|null = null;
devLetterHovered: number|null = null;


setDevLetterHovered(letterNr: number|null){
  this.devLetterHovered = letterNr;
}
setFrontLetterHovered(letterNr: number|null){
  this.frontLetterHovered = letterNr;
}
}
