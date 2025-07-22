import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-link',
  imports: [CommonModule],
  templateUrl: './circle-link.component.html',
  styleUrl: './circle-link.component.scss'
})
export class CircleLinkComponent {

  @Input() imgPath: string = '';
  @Input() linkHref: string = '';
  @Input() imgAltText: string = '';

}
