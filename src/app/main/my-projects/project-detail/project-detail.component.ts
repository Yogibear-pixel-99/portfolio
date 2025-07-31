import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header/header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ProjectDetailsService } from '../../../shared/services/project-details/project-details.service';
import { LeftContentComponent } from './left-content/left-content.component';
import { RightContentComponent } from './right-content/right-content.component';

@Component({
  selector: 'app-project-detail',
  imports: [
    HeaderComponent,
    TranslateModule,
    LeftContentComponent,
    RightContentComponent,
  ],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent implements OnInit {
  translate = inject(TranslateService);
  projectService = inject(ProjectDetailsService);

  ngOnInit(): void {
    let pos = sessionStorage.getItem('projectPos');
    if (pos !== null) {
    this.projectService.setProject(pos);
    } else {
      return
    }

  }
}
