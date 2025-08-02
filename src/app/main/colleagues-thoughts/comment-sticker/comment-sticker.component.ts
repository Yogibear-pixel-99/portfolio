import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-comment-sticker',
  imports: [TranslateModule, CommonModule],
  templateUrl: './comment-sticker.component.html',
  styleUrl: './comment-sticker.component.scss'
})
export class CommentStickerComponent {


  translate = inject(TranslateService);

  @Input({required: true}) commentPath: string = '';
  @Input({required: true}) namePath: string = '';
  @Input({required: true}) profileLink: string | boolean = '';
  @Input({required : true}) bgImgPath: string = '';
  @Input({required : true}) hoverImgPath: string = '';
  @Input({required : true}) role: string = '';


}

