import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommentStickerComponent } from './comment-sticker/comment-sticker.component';
import { StickerLinks } from '../../shared/interfaces/model';

@Component({
  selector: 'app-colleagues-thoughts',
  imports: [TranslateModule, CommentStickerComponent],
  templateUrl: './colleagues-thoughts.component.html',
  styleUrl: './colleagues-thoughts.component.scss',
})
export class ColleaguesThoughtsComponent {
  public translate = inject(TranslateService);

  public stickerLinks: StickerLinks = {
    dominic : "https://www.linkedin.com/in/dominic-duchaczek-397b641b6/",
    eduard : "https://www.linkedin.com/in/eduard-fray-696ba81a9/"
  }
}
