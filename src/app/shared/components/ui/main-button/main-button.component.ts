import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-button',
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.scss'
})
export class MainButtonComponent {

translate = inject(TranslateService);

@Input({required : true}) color: string = 'dark-button';
@Input({required : true}) translateText:string = '';
@Input({required : true}) hrefPath:string = '';
@Input() target:string = '_self';
}
