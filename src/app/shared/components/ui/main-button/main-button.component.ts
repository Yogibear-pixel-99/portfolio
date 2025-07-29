import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-button',
  imports: [CommonModule, TranslateModule],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.scss'
})
export class MainButtonComponent {

translate = inject(TranslateService);

@Input({required : true}) color: string = 'dark-button';
@Input({required : true}) translateText:string = '';
@Input({required : true}) linkPath: string = '';
}
