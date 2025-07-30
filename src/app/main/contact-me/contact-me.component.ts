
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FooterComponent } from "../../shared/components/footer/footer/footer.component";
import { ContactMeFormComponent } from './contact-me-form/contact-me-form.component';

@Component({
  selector: 'app-contact-me',
  imports: [TranslateModule, FooterComponent, ContactMeFormComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  translate = inject(TranslateService);



}
