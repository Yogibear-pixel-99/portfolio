import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ProjectDetailsService } from '../../../shared/services/project-details/project-details.service';

@Component({
  selector: 'app-project',
  imports: [TranslateModule, CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  translate = inject(TranslateService);
  projectService = inject(ProjectDetailsService);
  hoverProject:boolean = false;

  @Input() imgPath: string = '';
  @Input() imgAltText: string = '';
  @Input() translateHeaderPath: string = '';
  @Input() translateTextPath: string = '';
  @Input() animate: boolean = false;

}

