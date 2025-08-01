import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { ProjectDetailsService } from '../../../services/project-details/project-details.service';

@Component({
  selector: 'app-project-link-button',
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './project-link-button.component.html',
  styleUrl: './project-link-button.component.scss'
})
export class ProjectLinkButtonComponent {

  translate = inject(TranslateService);
  projectService = inject(ProjectDetailsService);

@Input({required : true}) color: string = 'dark-button';
@Input({required : true}) translateText:string = '';
@Input({required : true}) linkHref: string = '';
@Input({required : true}) projPos: string = '';

setProject(){
this.projectService.setProject(this.projPos);
}
}
