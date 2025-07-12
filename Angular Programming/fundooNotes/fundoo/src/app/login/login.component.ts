import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  message: string = '';
  isError: boolean = false;

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    if (!this.email || !this.password) {
      alert('Please enter both email and password.');
      return;
    }
    
    const data = {
      email: this.email,
      password: this.password,

    };

   this.auth.login(data).subscribe({
  next: (res:any) => {
    console.log('Login Success:', res);
   localStorage.setItem('token', res.id); // or res.data.id

 // or response.token if that's what API returns

     localStorage.setItem('loggedInUser', JSON.stringify({
    email: res.email,
    firstName: res.firstName,
    lastName: res.lastName
  }));
    this.message = 'Login successful! Redirecting...';
    setTimeout(() => {
      this.router.navigate(['/dashboard']); 
    }, 1000);
  },
  error: (err:any) => {
    console.error('Login Error:', err);
    this.message = 'Login failed: ' + (err.error?.message || 'Unknown error');
    this.isError = true;
  }
});

  }}