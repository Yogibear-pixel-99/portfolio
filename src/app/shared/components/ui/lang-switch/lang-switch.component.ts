import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-switch',
  imports: [CommonModule],
  templateUrl: './lang-switch.component.html',
  styleUrl: './lang-switch.component.scss'
})
export class LangSwitchComponent {
translate = inject(TranslateService);

changeLang(lang:string){
  this.translate.use(lang);
}

checkLang(){
  return this.translate.currentLang;
}
}
