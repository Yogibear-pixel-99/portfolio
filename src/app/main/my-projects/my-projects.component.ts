import { Component, inject, afterNextRender } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ProjectOverviewComponent } from "./project-overview/project-overview.component";
import { ProjectLinkButtonComponent } from "../../shared/components/ui/project-link-button/project-link-button.component";
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-my-projects',
  imports: [TranslateModule, ProjectOverviewComponent, ProjectLinkButtonComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

  translate = inject(TranslateService);
  viewportScroller = inject(ViewportScroller);

  constructor(){
    afterNextRender(() => {
      console.log("RENDER");
    })
  }

  setPosition(nr: string){
    sessionStorage.setItem('projectPos', nr);
  }

}
