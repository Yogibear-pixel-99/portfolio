import { Injectable } from '@angular/core';
import { TechLogos } from '../../interfaces/model';

@Injectable({
  providedIn: 'root'
})
export class TechlogoService {

    public logos: TechLogos[] = [
    {name : "HTML", imgPath : "images/skills/techlogos/html.png", imgAltText: "HTML Logo"},
    {name : "CSS", imgPath : "images/skills/techlogos/css.png", imgAltText: "CSS Logo"},
    {name : "SCSS", imgPath : "images/skills/techlogos/sass.svg", imgAltText: "SCSS Logo"},
    {name : "JavaScript", imgPath : "images/skills/techlogos/javascript.png", imgAltText: "JS Logo"},
    {name : "TypeScript", imgPath : "images/skills/techlogos/typescript.png", imgAltText: "TS Logo"},
    {name : "Angular", imgPath : "images/skills/techlogos/angular.png", imgAltText: "Angular Logo"},
    {name : "React", imgPath : "images/skills/techlogos/react.svg", imgAltText: "React Logo"},
    // {name : "Vite", imgPath : "images/skills/techlogos/vite.svg", imgAltText: "Vite Logo"},
    {name : "NextJs", imgPath : "images/skills/techlogos/nextjs.svg", imgAltText: "NextJs Logo"},
    {name : "Firebase", imgPath : "images/skills/techlogos/firebase.png", imgAltText: "Firebase Logo"},
    {name : "Git", imgPath : "images/skills/techlogos/git.png", imgAltText: "Git Logo"},
    {name : "REST-API", imgPath : "images/skills/techlogos/rest-api.png", imgAltText: "Rest-Api Logo"},
    {name : "Scrum", imgPath : "images/skills/techlogos/scrum.png", imgAltText: "Scrum Logo"},
    {name : "Material Design", imgPath : "images/skills/techlogos/material.png", imgAltText: "Material Design Logo"}
    
  ]

  constructor() { }

}