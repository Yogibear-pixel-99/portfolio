import { Injectable, inject } from '@angular/core';
import { ProjectInfos, TechLogos } from '../../interfaces/model';
import { TechlogoService } from '../techlogo/techlogo.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectDetailsService {

  techLogoService = inject(TechlogoService);

  headerTextPath: string = '';
  descHeaderPath: string = '';
  descTextPath: string = '';
  implHeaderPath: string = '';
  implTextPath: string = '';
  durHeaderPath: string = '';
  durTextPath: string = '';
  usedTechs: TechLogos[] = [{
    name : '',
    imgPath : '',
    imgAltText : ''
  }];

  projectPos:number = 0;


  projectArr:string[] = [
    'join', 'elpolloloco'
  ];



  projectInfos: ProjectInfos = {
    join : {
      img : "",
      sticker : "",
      usedTechs : [
        'html', 'css', 'javascript', 'firebase'
      ]
    },
    elpolloloco : {
      img : "",
      sticker : "",
      usedTechs : [
        'html', 'css', 'javascript'
      ]
    }
  }

  constructor() {
    this.getProjectInfos();
    this.getTechLogos();
  }

  nextProject(){
    this.projectPos = (this.projectPos + 1) % this.projectArr.length;
    this.getProjectInfos();
    this.getTechLogos();
  }

  prevProject(){
    this.projectPos = (this.projectPos - 1 + this.projectArr.length) % this.projectArr.length;
    this.getProjectInfos();
    this.getTechLogos();
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

  getTechLogos(){
   let techArray = this.projectInfos[this.projectArr[this.projectPos]].usedTechs;
         this.techLogoService.logos.forEach((element) => {
    techArray.forEach((techlogo) => {
      if (techlogo.toLowerCase() === element.name.toLowerCase()) {
        this.usedTechs.push(element);
      };
    })
   })
   console.log(this.usedTechs);
  }

}
