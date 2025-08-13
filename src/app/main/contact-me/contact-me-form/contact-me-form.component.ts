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
  public translate = inject(TranslateService);
  public http = inject(HttpClient);

  public contactData: UserContactInfo = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  public placeholderName: string = 'contactMe.form.name.placeholder';
  public placeholderEmail: string = 'contactMe.form.email.placeholder';
  public placeholderMessage: string = 'contactMe.form.message.placeholder';
  public placeholderPrivacy: string = 'contactMe.form.privacy.placeholder';

  public nameError: boolean = false;
  public emailError: boolean = false;
  public messageError: boolean = false;
  public privacyError: boolean = false;

  private post = {
    endPoint: 'https://www.puercherjoachim.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Trims the input, check if the input fields are valid/display error if not.
   * Submits the contact form.
   *
   * @param ngForm The contact Form.
   */
  public onSubmit(ngForm: NgForm) {
    this.trimInput();
    this.checkPrivacy();
    this.checkErrors();
    if (ngForm.submitted && ngForm.form.valid) {
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

  /**
   * Trims the input in the contact data object.
   */
  private trimInput() {
    this.contactData = {
      name: this.contactData.name.trim(),
      email: this.contactData.email.trim(),
      message: this.contactData.message.trim(),
      privacy: this.contactData.privacy,
    };
  }

  /**
   * Checks the validation of all input fields from the contact form and sets an error to the HTML if not.
   *
   * @returns
   */
  public checkButton(ngForm: NgForm) {
    if (
      this.contactData.name &&
      this.contactData.email &&
      this.contactData.message &&
      this.contactData.privacy === true &&
      ngForm.form.valid
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Checks the input fields from the contact form and displays the placeholder or the error text from the ngx/translate i18.
   */
  private checkErrors() {
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

  /**
   * Checks if the privacy input field is checked and returns a boolean to the privacy error variable
   */
  private checkPrivacy() {
    if (this.contactData.privacy === false) {
      this.privacyError = true;
    } else {
      this.privacyError = false;
    }
  }
}
