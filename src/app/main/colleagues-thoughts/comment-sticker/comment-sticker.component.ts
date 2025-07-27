import { Component, Input, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-comment-sticker',
  imports: [TranslateModule],
  templateUrl: './comment-sticker.component.html',
  styleUrl: './comment-sticker.component.scss'
})
export class CommentStickerComponent {

  translate = inject(TranslateService);

  @Input({required: true}) commentPath: string = '';
  @Input({required: true}) namePath: string = '';
  // @Input({required: true}) devPath: string = '';
  // @Input({required: true}) profilePath: string = '';
  @Input({required: true}) profileLink: string = '';
}
