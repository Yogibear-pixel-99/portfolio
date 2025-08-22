import { Injectable } from '@angular/core';
import { SocialLinks } from '../../interfaces/model';

@Injectable({
  providedIn: 'root',
})
export class SocialLinksService {
  public socialLinks: SocialLinks[] = [
    {
      name: "LinkedIn",
      imgPath: 'images/hero-section/linkedin.png',
      linkHref: 'https://www.linkedin.com/in/joachim-pürcher-92b249345/',
      imgAltText: 'linkedin logo',
    },
    {
      name: "Github",
      imgPath: 'images/hero-section/github.png',
      linkHref: 'https://github.com/Yogibear-pixel-99',
      imgAltText: 'github logo',
    },
    {
      name: "Email",
      imgPath: 'images/hero-section/mail.png',
      linkHref: 'mailto:contact@PuercherJoachim.com',
      imgAltText: 'email logo',
    },
  ];

  constructor() {}
}
