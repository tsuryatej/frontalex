import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  form: FormGroup;
  showPassword = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: [
        '', [
          Validators.required,
          Validators.pattern(/^[a-zA-Z\s]{3,}$/)
        ]
      ],
      lastName: [
        '', [
          Validators.required,
          Validators.pattern(/^[a-zA-Z\s]{3,}$/)
        ]
      ],
      email: [
        '', [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/)
        ]
      ],
      password: [
        '', [
          Validators.required,
          Validators.minLength(8)
        ]
      ]
    });
  }

  get firstName(): AbstractControl | null { return this.form.get('firstName'); }
  get lastName(): AbstractControl | null { return this.form.get('lastName'); }
  get email(): AbstractControl | null { return this.form.get('email'); }
  get password(): AbstractControl | null { return this.form.get('password'); }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  onReset(): void {
    this.form.reset();
    this.showPassword = false;
  }
}