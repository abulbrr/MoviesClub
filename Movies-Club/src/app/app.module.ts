import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app/app-routing/app-routing.module'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieComponent } from './movies/movie/movie.component';
import * as firebase from 'firebase';

import { AuthGuard } from './auth.guard';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MoviesService } from './movies/shared/movies.service';
import { AuthService } from './services/auth.service';
import { Login2Component } from './login2/login2.component';


export const firebaseConfig = {
  apiKey: "AIzaSyBD3jDFnpsaQC5oWVJOUXYZsl72KxZtWzU",
  authDomain: "moviesclub-f71c8.firebaseapp.com",
  databaseURL: "https://moviesclub-f71c8.firebaseio.com",
  projectId: "moviesclub-f71c8",
  storageBucket: "moviesclub-f71c8.appspot.com",
  messagingSenderId: "546713451212"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MoviesComponent,
    MoviesListComponent,
    MovieComponent,
    Login2Component
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig , 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [AuthService, AuthGuard, MoviesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
