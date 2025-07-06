import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  lang: string = 'en';

  data: { [key: string]: any } = {
    header: {
      aboutme: {
        en: 'About me',
        de: 'Über mich',
      },
      skills: {
        en: 'Skills',
        de: 'Fähigkeiten',
      },
      projects: {
        en: 'Projects',
        de: 'Projekte',
      },
      contact: {
        en: 'Contact',
        de: 'Kontakt',
      },
    },
    hero: {
      hello: {
        en: 'Hello World',
        de: 'Hallo Welt',
      },
      helloHover: {
        en: "I'M JOACHIM PÜRCHER",
        de: 'ICH HEIßE JOACHIM PÜRCHER',
      },
      mainSingle: {
        firstNormal: {
          en: ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd'],
          de: ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd'],
        },
        firstHover: {
          en: ['f', 'R', 'O', 'N', 'T', 'E', 'N', 'D'],
          de: ['f', 'R', 'O', 'N', 'T', 'E', 'N', 'D'],
        },
        secondNormal: {
          en: ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'],
          de: ['E', 'N', 'T', 'W', 'I', 'C', 'K', 'L', 'E', 'R'],
        },
        secondHover: {
          en: ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'],
          de: ['e', 'n', 't', 'w', 'i', 'c', 'k', 'l', 'e', 'r'],
        },
      },
      touch: {
        en: 'Get in Touch',
        de: 'Kontakt aufnehmen',
      },
    },
  };

  constructor() {}
}
