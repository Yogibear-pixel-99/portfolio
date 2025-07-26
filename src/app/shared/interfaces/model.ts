export interface CircleLinks {
  imgPath: string;
  linkHref: string;
  imgAltText: string;
}

export interface TechLogos {
  name: string;
  imgPath: string;
  imgAltText: string;
}

export interface ProjectInfos {
  [projectName: string]: ProjectInfo;
}
export interface ProjectInfo {
  img: string;
  sticker: string;
  usedTechs: string[];
  gitButtonLink: string;
  liveTestLink: string;
}
