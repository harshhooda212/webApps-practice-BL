// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { SideBarComponent } from './dashboard/sidebar/sidebar.component';
import { NoteComponent } from './dashboard/note/note.component';
import { ArchiveComponent } from './dashboard/archive/archive.component';
import { DeleteComponent } from './dashboard/delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HeaderComponent,
    SideBarComponent,
    NoteComponent,
    ArchiveComponent,
    DeleteComponent,
  
  
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule // optional, only if you created it
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
