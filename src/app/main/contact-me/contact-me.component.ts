
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FooterComponent } from "../../shared/components/footer/footer/footer.component";
import { MainButtonComponent } from "../../shared/components/ui/main-button/main-button.component";

@Component({
  selector: 'app-contact-me',
  imports: [TranslateModule, FormsModule, FooterComponent, MainButtonComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  translate = inject(TranslateService);

  testCheck = false;

  debuggTest(){
    console.log(this.testCheck);
  }

}
