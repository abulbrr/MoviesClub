import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) { 
    this.user = _firebaseAuth.authState;
}


  register(email: string, password: string)
  {
    this._firebaseAuth.auth
    .createUserWithEmailAndPassword( email, password )
    .catch(
      error => console.log(error)        
    )
    .then ( 
      response => console.log(response)
    );
  }

  login(email: string, password: string){
    this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
    .then(
        response => {
            sessionStorage.setItem("currentUser", response["email"]);
            this.router.navigate(["/home"]);
        }
    )
    .catch(
        error => alert(error)
    );
}

}
