import { Component, inject } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ProjectComponent } from "./project/project.component";
import { MainButtonComponent } from "../../shared/components/ui/main-button/main-button.component";

@Component({
  selector: 'app-my-projects',
  imports: [TranslateModule, ProjectComponent, MainButtonComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

  translate = inject(TranslateService);
}
