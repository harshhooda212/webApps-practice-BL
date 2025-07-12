// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { SideBarComponent } from './dashboard/side-bar/side-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NoteComponent } from './dashboard/note/note.component';
import { ArchiveComponent } from './dashboard/archive/archive.component'; // If routing module exists
import { BinComponent } from './dashboard/bin/bin.component';

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
    BinComponent
  
  
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
