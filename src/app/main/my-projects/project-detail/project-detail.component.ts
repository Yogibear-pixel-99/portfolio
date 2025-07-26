import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../../shared/components/header/header/header.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ProjectDetailsService } from '../../../shared/services/project-details.service';

@Component({
  selector: 'app-project-detail',
  imports: [HeaderComponent, TranslateModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {

translate = inject(TranslateService);
projectService = inject(ProjectDetailsService);



}
