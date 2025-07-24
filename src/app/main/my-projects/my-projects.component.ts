import { Component, inject } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ProjectComponent } from "./project/project.component";

@Component({
  selector: 'app-my-projects',
  imports: [TranslateModule, ProjectComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

  translate = inject(TranslateService);
}
