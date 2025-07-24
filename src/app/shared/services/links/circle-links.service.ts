import { Injectable } from '@angular/core';
import { CircleLinks } from '../../interfaces/model';

@Injectable({
  providedIn: 'root'
})
export class CircleLinksService {

  circleLinks: CircleLinks[] = [
  {imgPath : "images/hero-section/linkedin.svg", linkHref : "https://www.linkedin.com/in/joachim-pürcher-92b249345/", imgAltText : "linkedin logo"},
  {imgPath : "images/hero-section/github.svg", linkHref : "https://github.com/Yogibear-pixel-99", imgAltText : "github logo"},
  {imgPath : "images/hero-section/mail.svg", linkHref : "mailto:contact@PuercherJoachim.com", imgAltText : "email logo"}
];

  constructor() { }
}
