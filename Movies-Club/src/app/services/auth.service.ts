import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router){}

  register(email: string, password: string)
  {
    firebase.auth()
    .createUserWithEmailAndPassword( email, password )
    .catch(
      error => console.log(error)
    )
    .then ( 
      response => console.log(response)
    );
  }

  login(email: string, password:string )
  {
    firebase.auth().signInWithEmailAndPassword( email, password )
    .then(
        response => console.log(response)
    )
    .catch(
        error => console.log(error)
    )
  }

}
