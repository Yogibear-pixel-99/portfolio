import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './main/hero-section/hero-section.component';
import { MaskOverlayComponent } from "./shared/components/mask-overlay/mask-overlay.component";
import { AboutMeComponent } from "./main/about-me/about-me.component";
import { TranslateService } from '@ngx-translate/core';
import { SkillSetComponent } from "./main/skill-set/skill-set.component";
import { MyProjectsComponent } from "./main/my-projects/my-projects.component";
import { ColleaguesThoughtsComponent } from "./main/colleagues-thoughts/colleagues-thoughts.component";
import { ProjectDetailComponent } from "./main/my-projects/project-detail/project-detail.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSectionComponent, MaskOverlayComponent, AboutMeComponent, SkillSetComponent, MyProjectsComponent, ColleaguesThoughtsComponent, ProjectDetailComponent],
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
