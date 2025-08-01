import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ProjectDetailsService } from '../../../shared/services/project-details/project-details.service';

@Component({
  selector: 'app-project-overview',
  imports: [TranslateModule, CommonModule],
  templateUrl: './project-overview.component.html',
  styleUrl: './project-overview.component.scss',
})
export class ProjectOverviewComponent {
  translate = inject(TranslateService);
  projectService = inject(ProjectDetailsService);
  hoverProject:boolean = false;

  @Input() imgPath: string = '';
  @Input() imgAltText: string = '';
  @Input() translateHeaderPath: string = '';
  @Input() translateTextPath: string = '';
  @Input() animate: boolean = false;

}

