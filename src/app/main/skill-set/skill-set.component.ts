import { Component, inject } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { TechStackLogoComponent } from "../../shared/components/ui/tech-stack-logo/tech-stack-logo.component";
import { TechlogoService } from '../../shared/services/techlogo/techlogo.service';

@Component({
  selector: 'app-skill-set',
  imports: [TranslateModule, TechStackLogoComponent],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {
translate = inject(TranslateService);
techlogoService = inject(TechlogoService);

stickerOpen: boolean = false;
activeSticker: number = 0;
stickerLogo: string[] = [
  'images/skills/sticker_close.png',
  'images/skills/sticker_middle.png',
  'images/skills/sticker_open.png'
]
get getStickerPath() {
  return this.stickerLogo[this.activeSticker];
}

openSticker(){
  if (!this.stickerOpen) {
    
  this.activeSticker = 1;
  setTimeout(() => {
    this.activeSticker = 2;
    this.stickerOpen = true;
   }, 200);
}
}

closeSticker(){
  if (this.stickerOpen) {
  setTimeout(() => this.activeSticker = 1, 1500);
  setTimeout(() => {
    this.activeSticker = 0;
    this.stickerOpen = false;
  }, 1700);
}
}

}