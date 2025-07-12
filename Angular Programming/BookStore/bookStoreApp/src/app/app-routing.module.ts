import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignUpComponent } from './component/login-sign-up/login-sign-up.component';
import {HomeComponent} from './component/home/home.component'

  const routes: Routes = [
  { path: '', redirectTo: 'login-sign-up', pathMatch: 'full' },
  { path: 'login-sign-up', component: LoginSignUpComponent },
 {path: 'home', component: HomeComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
