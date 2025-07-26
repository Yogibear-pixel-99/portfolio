import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ProjectDetailsService } from '../../../../shared/services/project-details.service';

@Component({
  selector: 'app-left-content',
  imports: [TranslateModule],
  templateUrl: './left-content.component.html',
  styleUrl: './left-content.component.scss'
})
export class LeftContentComponent {

  translate = inject(TranslateService);
  projectService = inject(ProjectDetailsService);

}
