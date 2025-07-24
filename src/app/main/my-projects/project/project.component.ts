import { Component, Input, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  imports: [TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  translate = inject(TranslateService);

  @Input() imgPath: string = '';
  @Input() imgAltText: string = '';
  @Input() translateHeaderPath: string = '';
  @Input() translateTextPath: string = '';
}
