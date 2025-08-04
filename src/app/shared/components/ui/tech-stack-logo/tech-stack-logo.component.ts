import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-tech-stack-logo',
  imports: [],
  templateUrl: './tech-stack-logo.component.html',
  styleUrl: './tech-stack-logo.component.scss'
})
export class TechStackLogoComponent {

  @Input() public imgPath: string = ''; 
  @Input() public imgAltText: string = ''; 
  @Input() public logoName: string = ''; 
  
}
