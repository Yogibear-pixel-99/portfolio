import { AfterViewInit, Component, inject } from '@angular/core';
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
export class ProjectDetailComponent implements AfterViewInit {
  public translate = inject(TranslateService);
  public projectService = inject(ProjectDetailsService);

  /**
   * Scrolls to the top of the page if component is initialized.
   */
  public ngAfterViewInit(): void {
    scrollTo({ top: 0, behavior: 'smooth' });
  }
}
