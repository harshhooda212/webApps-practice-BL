import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private signupUrl = 'https://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp';
   private loginUrl = 'https://fundoonotes.incubation.bridgelabz.com/api/user/login';


  constructor(private http: HttpClient) { }
  signUp(data: any): Observable<any>{
    return this.http.post(this.signupUrl,data);
  }

   login(data: any): Observable<any>{
    return this.http.post(this.loginUrl,data);
  }
}
