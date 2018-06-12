
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../not-found/not-found.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { Login2Component } from '../login2/login2.component';
import { RegisterComponent } from '../register/register.component';
import { AuthGuard } from '../auth.guard';
import { MoviesComponent } from '../movies/movies.component';


const routes: Routes =
[
{ path: '', redirectTo: '/movies', pathMatch: 'full'},
{ path: 'home', component: HomeComponent},
{ path: 'movies', component: MoviesComponent , canActivate: [AuthGuard] },
{ path: 'login', component: Login2Component },
{ path: 'register', component: RegisterComponent },
{ path: '**', component: NotFoundComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
