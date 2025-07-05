import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  lang: string = "de";

data: {[key: string]: any} = {
  header : {
    aboutme : {
      en : "About me",
      de : "Über mich"
    },
    skills : {
      en: "Skills",
      de: "Fähigkeiten"
    },
    projects : {
      en: "Projects",
      de: "Projekte"
    },
    contact : {
      en: "Contact",
      de: "Kontakt"
    }
  },

  hero : {
    hello : {
      en: "Hello World",
      de: "Hallo Welt"
    },
    touch : {
      en: "Get in Touch",
      de: "Kontakt aufnehmen"
    }
  }
}

  constructor() { }


}
