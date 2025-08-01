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
  usedTechs: TechLogos[] = [
    {
      name: '',
      imgPath: '',
      imgAltText: '',
    },
  ];
  imgPath: string = '';
  stickerPath: string = '';
  gitLink: string = '';
  liveLink: string = '';

  projectPos: number = 0;
  projectArr: string[] = ['join', 'elpolloloco'];
  projectInfos: ProjectInfos = {
    join: {
      img: 'images/projects/project-details/join/join-screen-0.png',
      sticker: 'images/projects/project-details/Sticker.png',
      usedTechs: ['html', 'css', 'javascript', 'firebase'],
      gitButtonLink: 'https://github.com/Yogibear-pixel-99/join',
      liveTestLink: 'https://www.puercherjoachim.com/join/html',
    },
    elpolloloco: {
      img: 'images/projects/project-details/elpolloloco/loco-screen-0.png',
      sticker: 'images/projects/project-details/Sticker.png',
      usedTechs: ['html', 'css', 'javascript'],
      gitButtonLink: 'https://github.com/Yogibear-pixel-99/el_pollo_loco',
      liveTestLink: 'https://www.puercherjoachim.com/elpolloloco',
    },
  };

  constructor() {
    this.getProjectInfos();
    this.getTechLogos();
  }

    setProject(nr: string){
    let newPos = parseInt(nr);
    this.projectPos = newPos;
    this.getProjectInfos();
    this.getTechLogos();
  }

  nextProject() {
    this.projectPos = (this.projectPos + 1) % this.projectArr.length;
    this.getProjectInfos();
    this.getTechLogos();
  }

  prevProject() {
    this.projectPos =
      (this.projectPos - 1 + this.projectArr.length) % this.projectArr.length;
    this.getProjectInfos();
    this.getTechLogos();
  }

  getProjectInfos() {
    this.headerTextPath = `projects.projectDetails.${
      this.projectArr[this.projectPos]
    }.header`;
    this.descHeaderPath = `projects.projectDetails.${
      this.projectArr[this.projectPos]
    }.descHeader`;
    this.descTextPath = `projects.projectDetails.${
      this.projectArr[this.projectPos]
    }.descText`;
    this.implHeaderPath = `projects.projectDetails.${
      this.projectArr[this.projectPos]
    }.implementHeader`;
    this.implTextPath = `projects.projectDetails.${
      this.projectArr[this.projectPos]
    }.implementText`;
    this.durHeaderPath = `projects.projectDetails.${
      this.projectArr[this.projectPos]
    }.durHeader`;
    this.durTextPath = `projects.projectDetails.${
      this.projectArr[this.projectPos]
    }.durTime`;
    this.imgPath = this.projectInfos[this.projectArr[this.projectPos]].img;
    this.stickerPath = this.projectInfos[this.projectArr[this.projectPos]].sticker;
    this.gitLink = this.projectInfos[this.projectArr[this.projectPos]].gitButtonLink;
    this.liveLink = this.projectInfos[this.projectArr[this.projectPos]].liveTestLink;
  }

  getTechLogos() {
    this.usedTechs = [];
    let techArray =
      this.projectInfos[this.projectArr[this.projectPos]].usedTechs;
    this.usedTechs = this.techLogoService.logos.filter((element) => {
      return techArray.includes(element.name.toLocaleLowerCase());
    });
  }
}
