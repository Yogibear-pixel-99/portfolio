import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserContactInfo } from '../../../shared/interfaces/model';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-me-form',
  imports: [TranslateModule, FormsModule, CommonModule],
  templateUrl: './contact-me-form.component.html',
  styleUrl: './contact-me-form.component.scss',
})
export class ContactMeFormComponent {
  translate = inject(TranslateService);
  http = inject(HttpClient);

  contactData: UserContactInfo = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  privacyCheck: boolean = false;

  placeholderName: string = 'contactMe.form.name.placeholder';
  placeholderEmail: string = 'contactMe.form.email.placeholder';
  placeholderMessage: string = 'contactMe.form.message.placeholder';
  placeholderPrivacy: string = 'contactMe.form.privacy.placeholder';

  nameError = false;
  emailError = false;
  messageError = false;
  privacyError = false;

  // mailTest = false;

  post = {
    endPoint: 'https://www.puercherjoachim.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    debugger;
    this.trimInput();
    this.checkErrors();
    this.checkPrivacy();

    // if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
    if (ngForm.submitted && ngForm.form.valid) {
      // console.log(ngForm);
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid) {
      ngForm.resetForm();
    }
  }

  trimInput() {
    this.contactData = {
      name: this.contactData.name.trim(),
      email: this.contactData.email.trim(),
      message: this.contactData.message.trim(),
      privacy: this.contactData.privacy,
    };
  }

  checkButton() {
    if (
      this.contactData.name &&
      this.contactData.email &&
      this.contactData.message &&
      this.contactData.privacy === true
    ) {
      return true;
    } else {
      return false;
    }
  }

  checkErrors() {
    const config = ['name', 'email', 'message'];

    config.forEach((element) => {
      const value = this.contactData[element as keyof UserContactInfo];
      const placeholderVar = `placeholder${
        element.charAt(0).toUpperCase() + element.slice(1)
      }`;
      const errorVar = `${element}Error`;
      if (value === '') {
        (this as any)[placeholderVar] = `contactMe.form.${element}.error`;
        (this as any)[errorVar] = true;
      } else {
        (this as any)[placeholderVar] = `contactMe.form.${element}.placeholder`;
        (this as any)[errorVar] = false;
      }
    });
  }

  checkPrivacy() {
    if (this.contactData.privacy === false) {
      this.privacyError = true;
    } else {
      this.privacyError = false;
    }
  }

  getPlaceholder(typeName: string) {
    return `contactMe.form.${typeName}.placeholder`;
  }
}
