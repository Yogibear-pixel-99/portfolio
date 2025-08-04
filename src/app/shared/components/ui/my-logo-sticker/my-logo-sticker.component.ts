import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-logo-sticker',
  imports: [],
  templateUrl: './my-logo-sticker.component.html',
  styleUrl: './my-logo-sticker.component.scss',
})
export class MyLogoStickerComponent {
  @Input({ required: true }) public stickerImgPath: string = '';
  @Input({ required: true }) public logoImgPath: string = '';
}
