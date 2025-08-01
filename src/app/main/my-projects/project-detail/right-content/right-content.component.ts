import { Component, inject } from '@angular/core';
import { ProjectDetailsService } from '../../../../shared/services/project-details/project-details.service';
import { MainButtonComponent } from '../../../../shared/components/ui/main-button/main-button.component';
import { MyLogoStickerComponent } from '../../../../shared/components/ui/my-logo-sticker/my-logo-sticker.component';

@Component({
  selector: 'app-right-content',
  imports: [MainButtonComponent, MyLogoStickerComponent],
  templateUrl: './right-content.component.html',
  styleUrl: './right-content.component.scss'
})
export class RightContentComponent {

  projectService = inject(ProjectDetailsService);

}
