import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ApiResponseServService} from './api-response-serv.service'
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    AboutUsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ApiResponseServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
