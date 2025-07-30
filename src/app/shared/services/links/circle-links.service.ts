import { Injectable } from '@angular/core';
import { SocialLinks } from '../../interfaces/model';

@Injectable({
  providedIn: 'root',
})
export class SocialLinksService {
  socialLinks: SocialLinks[] = [
    {
      name: "LinkedIn",
      imgPath: 'images/hero-section/linkedin.svg',
      linkHref: 'https://www.linkedin.com/in/joachim-pürcher-92b249345/',
      imgAltText: 'linkedin logo',
    },
    {
      name: "Github",
      imgPath: 'images/hero-section/github.svg',
      linkHref: 'https://github.com/Yogibear-pixel-99',
      imgAltText: 'github logo',
    },
    {
      name: "Email",
      imgPath: 'images/hero-section/mail.svg',
      linkHref: 'mailto:contact@PuercherJoachim.com',
      imgAltText: 'email logo',
    },
  ];

  constructor() {}
}
