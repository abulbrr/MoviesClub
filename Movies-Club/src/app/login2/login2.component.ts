import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/';
import { AuthService } from './../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }
  onLogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.login(email, password);
    this.route.navigate(['/home']);
  }

}
