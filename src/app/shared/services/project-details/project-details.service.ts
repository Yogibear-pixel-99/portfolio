import { Injectable, inject } from '@angular/core';
import { ProjectInfos, TechLogos } from '../../interfaces/model';
import { TechlogoService } from '../techlogo/techlogo.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectDetailsService {
  public techLogoService = inject(TechlogoService);

  public usedTechs: TechLogos[] = [
    {
      name: '',
      imgPath: '',
      imgAltText: '',
    },
  ];

  public projectPos: number = 0;
  public projectArr: string[] = ['join', 'elpolloloco', 'simplify', 'schoolInfos'];
  public projectInfos: ProjectInfos = {
    join: {
      img: 'images/projects/project-details/join/join-screen-0.png',
      sticker: 'images/projects/project-details/Sticker.png',
      usedTechs: ['html', 'css', 'javascript', 'firebase'],
      gitButtonLink: 'https://github.com/Yogibear-pixel-99/join',
      liveTestLink: 'https://www.puercherjoachim.com/join/html/index.html',
    },
    elpolloloco: {
      img: 'images/projects/project-details/elpolloloco/loco-screen-0.png',
      sticker: 'images/projects/project-details/Sticker.png',
      usedTechs: ['html', 'css', 'javascript'],
      gitButtonLink: 'https://github.com/Yogibear-pixel-99/el_pollo_loco',
      liveTestLink: 'https://www.puercherjoachim.com/elpolloloco/index.html',
    },
    simplify: {
      img: 'images/projects/project-details/simplify/simplify-details-screen.webp',
      sticker: 'images/projects/project-details/Sticker.png',
      usedTechs: ['html', 'scss', 'typescript', 'react', 'next', 'firebase', 'tailwind'],
      gitButtonLink: 'https://github.com/Yogibear-pixel-99/simplifythislife',
      liveTestLink: 'https://www.puercherjoachim.com/simplify/',
    },
    schoolInfos: {
      img: 'images/projects/project-details/schoolinfos/school-infos-details.webp',
      sticker: 'images/projects/project-details/Sticker.png',
      usedTechs: ['html', 'scss', 'typescript', 'react', 'vite'],
      gitButtonLink: 'https://github.com/Yogibear-pixel-99/school_open_house',
      liveTestLink: 'https://www.puercherjoachim.com/schoolinfos/',
    },
  };

  constructor() {
    this.getTechLogos();
  }

  /**
   * Parses the nr string to a number, sets the project position and gets the used tech logos.
   *
   * @param nr The project position in the array.
   */
  public setProject(nr: string) {
    let newPos = parseInt(nr);
    this.projectPos = newPos;
    this.getTechLogos();
  }

  /**
   * Changes the project data to the next project by imcrementing the projectPos number. Gets the used tech logos.
   */
  public nextProject() {
    this.projectPos = (this.projectPos + 1) % this.projectArr.length;
    this.getTechLogos();
  }

  /**
   * Changes the project data to the next project by decrementing the projectPos number. Gets the used tech logos.
   */
  public prevProject() {
    this.projectPos =
      (this.projectPos - 1 + this.projectArr.length) % this.projectArr.length;
    this.getTechLogos();
  }

  /**
   * Filters the tech logos in the tech service and collecting all infos from the used once in the active project.
   */
  public getTechLogos() {
    this.usedTechs = [];
    let techArray =
      this.projectInfos[this.projectArr[this.projectPos]].usedTechs;
    this.usedTechs = this.techLogoService.logos.filter((element) => {
      return techArray.includes(element.name.toLocaleLowerCase());
    });
  }
}
