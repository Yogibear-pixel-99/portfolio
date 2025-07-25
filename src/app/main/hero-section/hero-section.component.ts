import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header/header.component";
import { CommonModule } from '@angular/common';
import { CircleLinkComponent } from '../../shared/components/ui/circle-link/circle-link.component';
import { CircleLinksService } from '../../shared/services/links/circle-links.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { MainButtonComponent } from "../../shared/components/ui/main-button/main-button.component";

@Component({
  standalone: true,
  selector: 'app-hero-section',
  imports: [HeaderComponent, CommonModule, CircleLinkComponent, TranslateModule, MainButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements OnInit, OnDestroy {
translate = inject(TranslateService);
linkService = inject(CircleLinksService);

helloEnterText:boolean = false;
helloEnterAnimate:boolean = false;
profilHovered:boolean = false;

hoveredLetterFirst: number | null = null;
hoveredLetterSecond: number | null = null;

mainFirstText$: string[] = [];
mainFirstHover$: string[] = [];
mainSecondText$: string[] = [];
mainSecondHover$: string[] = [];
subscriptions: Subscription[] = [];


showName(){
setTimeout(() => this.helloEnterText = true, 150);
}

hideName(): void{
setTimeout(() => this.helloEnterText = false, 150);
}

ngOnInit(){
const sub1 = this.translate.stream('hero.mainSingle.firstNormal').subscribe((data) => {
this.mainFirstText$ = data;
});
const sub2 = this.translate.stream('hero.mainSingle.firstHover').subscribe((data) => {
  this.mainFirstHover$ = data
});
const sub3 = this.translate.stream('hero.mainSingle.secondNormal').subscribe((data) => {
  this.mainSecondText$ = data;
});
const sub4 = this.translate.stream('hero.mainSingle.secondHover').subscribe((data) => {
  this.mainSecondHover$ = data;
});

this.subscriptions.push(sub1, sub2, sub3, sub4);
}

ngOnDestroy(): void {
  this.subscriptions.forEach((element) => element.unsubscribe());
}

}
