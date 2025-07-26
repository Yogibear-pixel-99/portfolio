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

  constructor() {}

  nextProject(){
  if (this.projectPos === this.projectArr.length - 1) {
    this.projectPos = 0;
  } else {
    this.projectPos++;
  }
  this.getProjectInfos();
  }

  prevProject(){
    if (this.projectPos === 0) {
      this.projectPos = this.projectArr.length - 1
    } else {
      this.projectPos--;
    }
    this.getProjectInfos();
  }



  getProjectInfos (){
    this.headerTextPath = `projects.projectDetails.${this.projectArr[this.projectPos]}.header`;
    this.descHeaderPath = `projects.projectDetails.${this.projectArr[this.projectPos]}.descHeader`;
  }
}
