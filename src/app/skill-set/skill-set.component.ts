import { Component, inject } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { TechStackLogoComponent } from "../shared/components/ui/tech-stack-logo/tech-stack-logo.component";
import { TechlogoService } from '../shared/services/techlogo/techlogo.service';

@Component({
  selector: 'app-skill-set',
  imports: [TranslateModule, TechStackLogoComponent],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {
translate = inject(TranslateService);
techlogoService = inject(TechlogoService);
}
