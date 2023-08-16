import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public successMessage: string | null = null;
  public errorMessage: string | null = null;

  constructor() {
    emailjs.init('p8vQA51aQnoK3-qYA'); // Replace with your user ID
  }

  handleSubmit(event: any) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    emailjs.sendForm('service_gb9gngg', 'template_o52ct1k', form)
      .then((response) => {
        console.log('Email sent successfully:', response);
        this.successMessage = 'We have received your query !! Rest Assured! We will get in touch soon.';
        this.errorMessage = null;
        //alert(this.successMessage);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        this.errorMessage = 'There was an error sending your detail. Please try again later or contact us directly.';
        this.successMessage = null;
        //alert(this.errorMessage)
      });
  }
}





// emailjs.init('p8vQA51aQnoK3-qYA');
// emailjs.sendForm('service_gb9gngg', 'template_o52ct1k', form)