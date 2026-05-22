import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

declare const bootstrap: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './contact.html',
})
export class Contact {
  @ViewChild('successToast') successToast!: ElementRef;

  nameRegex = /^[a-zA-Z\s]{3,50}$/;
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(this.nameRegex)]),
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get subject() { return this.form.get('subject'); }
  get message() { return this.form.get('message'); }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    console.log(this.form.value);
    const toast = new bootstrap.Toast(this.successToast.nativeElement, { delay: 3000 });
    toast.show();
    this.form.reset();
  }
}