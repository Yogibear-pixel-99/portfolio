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
  public translate = inject(TranslateService);
  public projectService = inject(ProjectDetailsService);
  public hoverProject: boolean = false;

  @Input() public imgPath: string = '';
  @Input() public imgAltText: string = '';
  @Input() public translateHeaderPath: string = '';
  @Input() public translateTextPath: string = '';
  @Input() public animate: boolean = false;
}