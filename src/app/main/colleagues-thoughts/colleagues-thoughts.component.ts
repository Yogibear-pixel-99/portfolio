import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommentStickerComponent } from "./comment-sticker/comment-sticker.component";

@Component({
  selector: 'app-colleagues-thoughts',
  imports: [TranslateModule, CommentStickerComponent],
  templateUrl: './colleagues-thoughts.component.html',
  styleUrl: './colleagues-thoughts.component.scss'
})
export class ColleaguesThoughtsComponent {

  translate = inject(TranslateService);

}
