import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NoteComponent } from './dashboard/note/note.component';
import { ArchiveComponent } from './dashboard/archive/archive.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard/note', component: NoteComponent},
  {path: 'dashboard/archive', component: ArchiveComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
