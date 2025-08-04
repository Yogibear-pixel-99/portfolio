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

  @Input({required: true}) public commentPath: string = '';
  @Input({required: true}) public namePath: string = '';
  @Input({required: true}) public profileLink: string | boolean = '';
  @Input({required : true}) public bgImgPath: string = '';
  @Input({required : true}) public hoverImgPath: string = '';
  @Input({required : true}) public role: string = '';


}

