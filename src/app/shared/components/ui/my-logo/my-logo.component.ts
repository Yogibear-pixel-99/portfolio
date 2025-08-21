import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-logo',
  imports: [RouterLink],
  templateUrl: './my-logo.component.html',
  styleUrl: './my-logo.component.scss'
})
export class MyLogoComponent {
@Input() public hrefPath: string = '/';
}
