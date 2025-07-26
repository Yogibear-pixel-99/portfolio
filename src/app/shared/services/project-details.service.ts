import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectDetailsService {
  headerTextPath: string = '';
  descHeaderPath: string = '';
  descTextPath: string = '';
  implHeaderPath: string = '';
  implTextPath: string = '';
  durHeaderPath: string = '';
  durTextPath: string = '';
  usedTechs: object[] = [];

  projectPos:number = 0;
  projectArr:string[] = [
    'join', 'elpolloloco'
  ];

  constructor() {
    this.getProjectInfos();
  }

  nextProject(){
    this.projectPos = (this.projectPos + 1) % this.projectArr.length;
    this.getProjectInfos();
  }

  prevProject(){
    this.projectPos = (this.projectPos - 1 + this.projectArr.length) % this.projectArr.length;
    this.getProjectInfos();
  }

  getProjectInfos (){
    this.headerTextPath = `projects.projectDetails.${this.projectArr[this.projectPos]}.header`;
    this.descHeaderPath = `projects.projectDetails.${this.projectArr[this.projectPos]}.descHeader`;
    this.descTextPath = `projects.projectDetails.${this.projectArr[this.projectPos]}.descText`;
    this.implHeaderPath = `projects.projectDetails.${this.projectArr[this.projectPos]}.implementHeader`;
    this.implTextPath = `projects.projectDetails.${this.projectArr[this.projectPos]}.implementText`;
    this.durHeaderPath = `projects.projectDetails.${this.projectArr[this.projectPos]}.durHeader`;
    this.durTextPath = `projects.projectDetails.${this.projectArr[this.projectPos]}.durTime`;
  }



}
