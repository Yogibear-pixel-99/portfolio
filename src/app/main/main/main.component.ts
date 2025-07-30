import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillSetComponent } from '../skill-set/skill-set.component';
import { MyProjectsComponent } from '../my-projects/my-projects.component';
import { ColleaguesThoughtsComponent } from '../colleagues-thoughts/colleagues-thoughts.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';

@Component({
  selector: 'app-main',
  imports: [HeroSectionComponent, AboutMeComponent, SkillSetComponent, MyProjectsComponent, ColleaguesThoughtsComponent, ContactMeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
