import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-sign-up',
  templateUrl: './login-sign-up.component.html',
  styleUrls: ['./login-sign-up.component.scss']
})
export class LoginSignUpComponent {
  showLogin = true;
  loginSuccess: boolean = false;
loginErrorMessage: string = '';
signupErrorMessage: string = '';



  signupData = {
    fullName: '',
    email: '',
    password: '',
    phone: '',
    service: 'advance'
  };

  loginData = {
    email: '',
    password: ''
  };

  constructor(private http: HttpClient,private router: Router) {}

  toggleView() {
    this.showLogin = !this.showLogin;
  }

  onSignup(form: any) {
  if (form.invalid) {
    return;
  }

  const signupData = {
    fullName: form.value.fullName,
    email: form.value.email,
    password: form.value.password,
    phone: form.value.phone,
    service: 'advance'
  };

  this.http.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/registration', signupData)
  .subscribe({
    next: (res: any) => {
      console.log('✅ Signup Success:', res);
      // Navigate to Notes on successful signup
      this.router.navigate(['/login']);
    },
    error: (err) => {
      console.error('❌ Signup Error:', err);
      this.signupErrorMessage = err.error?.message || 'Signup failed';
    }
  });

}


 onLogin(form: any) {
  if (form.invalid) return;

  const loginData = {
    email: form.value.email,
    password: form.value.password
  };

  this.http.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/login', loginData)
    .subscribe({
      next: (res: any) => {
        console.log('✅ Login Success:', res);
        this.loginSuccess = true;
        this.loginErrorMessage = '';
      },
      error: (err) => {
        console.error('❌ Login Error:', err);
        this.loginErrorMessage = err.error?.message || 'Login failed';
      }
    });
}

}
