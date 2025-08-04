import { AfterViewInit, Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillSetComponent } from '../skill-set/skill-set.component';
import { MyProjectsComponent } from '../my-projects/my-projects.component';
import { ColleaguesThoughtsComponent } from '../colleagues-thoughts/colleagues-thoughts.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [
    HeroSectionComponent,
    AboutMeComponent,
    SkillSetComponent,
    MyProjectsComponent,
    ColleaguesThoughtsComponent,
    ContactMeComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements AfterViewInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  /**
   * Subscribes the fragment observable and calls a function jump to the expected section.
   */
  public ngAfterViewInit() {
    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      if (fragment) this.jumpToSection(fragment);
    });
  }

  /**
   * Gets the HTML element from the fragment and scroll to the section at block start.
   *
   * @param fragment The fragement of the main site where scroll to.
   */
  private jumpToSection(fragment: string | null) {
    if (fragment) {
      document
        .getElementById(fragment)
        ?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }
}
