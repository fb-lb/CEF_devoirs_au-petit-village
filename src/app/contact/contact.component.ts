import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    standalone: false
})
export class ContactComponent {

  form = new FormGroup({
    lastName: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Zéèêàîùôçïäâëüöœ -]*')]),
    firstName: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Zéèêàîùôçïäâëüöœ -]*')]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    message: new FormControl('', [Validators.required, Validators.maxLength(1000)])
  })

  trySendInvalidForm = false;
  sendValidForm() {
    this.form.reset({ lastName: '', firstName: '', mail: '', subject: '', message: '' });
    this.trySendInvalidForm = false;
    alert("Merci, votre message a bien été envoyé");
  }

  sendInvalidForm() {
    this.trySendInvalidForm = true;
  }
}
