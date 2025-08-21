import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-logo',
  imports: [RouterLink],
  templateUrl: './my-logo.component.html',
  styleUrl: './my-logo.component.scss'
})
export class MyLogoComponent {
@Input() public hrefPath: string = '/';
@Output() public logoClicked = new EventEmitter();


/**
 * Start sending the click for the animation to the next parent component.
 */
startAnimation(){
  this.logoClicked.emit();
}
}
