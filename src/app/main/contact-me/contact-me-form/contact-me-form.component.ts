import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { UserContactInfo } from '../../../shared/interfaces/model';

@Component({
  selector: 'app-contact-me-form',
  imports: [TranslateModule, FormsModule],
  templateUrl: './contact-me-form.component.html',
  styleUrl: './contact-me-form.component.scss',
})
export class ContactMeFormComponent {
  translate = inject(TranslateService);

  contactData: UserContactInfo = {
    name : "",
    phoneNumber: "",
    message : ""
  }

  onSubmit(){
    console.log(this.contactData);
    
  }

}
