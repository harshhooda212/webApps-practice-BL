import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  confirmPassword = '';
  message: string = '';
  isError: boolean = false;

  constructor(private auth: AuthService, private router: Router) {}

 onSignup() {
  if (this.password !== this.confirmPassword) {
    this.message = 'Passwords do not match';
    this.isError = true;
    return;
  }

  const data = {
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    password: this.password,
    service: 'advance'
  };

  this.auth.signUp(data).subscribe({
    next: (res) => {
      this.message = 'Signup successful! Redirecting to login...';
      this.isError = false;
      setTimeout(() => {
        this.message = '';
        this.router.navigate(['/login']);
      }, 3000);
    },
    error: (err) => {
      this.message = 'Signup failed: ' + (err.error?.message || 'Unknown error');
      this.isError = true;
      setTimeout(() => (this.message = ''), 4000);
    }
  });
}
}