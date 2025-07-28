
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  imports: [TranslateModule, FormsModule],
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
