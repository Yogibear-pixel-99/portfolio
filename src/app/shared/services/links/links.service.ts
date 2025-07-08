import { Injectable } from '@angular/core';
import { CircleLinks, HeaderLinks } from '../../interfaces/model';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  circleLinks: CircleLinks[] = [
  {linkImgSrc : "images/hero-section/linkedin.svg", linkHref : "https://www.linkedin.com/in/joachim-pürcher-92b249345/", imgAltText : "linkedin logo"},
  {linkImgSrc : "images/hero-section/github.svg", linkHref : "https://github.com/Yogibear-pixel-99", imgAltText : "github logo"},
  {linkImgSrc : "images/hero-section/mail.svg", linkHref : "mailto:joachim.puercher@gmail.com", imgAltText : "email logo"}
];

  headerLinks : HeaderLinks[] = [
    {hoverImg : "images/hero-section/1.png", linkHref : "#", objSrcName : "aboutme"},
    {hoverImg : "images/hero-section/2.png", linkHref : "#", objSrcName : "skills"},
    {hoverImg : "images/hero-section/3.png", linkHref : "#", objSrcName : "projects"},
    {hoverImg : "images/hero-section/4.png", linkHref : "#", objSrcName : "contact"}
  ]

  constructor() { }
}
