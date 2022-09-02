import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filebase-google-login',
  templateUrl: './filebase-google-login.component.html',
  styleUrls: ['./filebase-google-login.component.scss']
})
export class FilebaseGoogleLoginComponent implements OnInit {

  user$!: Observable<firebase.User | null>;
  user!: any;

  constructor(public auth: AngularFireAuth) {
  }

  ngOnInit() {
    this.user$ = this.auth.user;
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }

  loginAndroid() {
    GoogleAuth.signIn()
    .then(user => this.user = user)
    .catch(console.log);
  }

  logoutAndroid() {
    GoogleAuth.signOut()
    .then(v => this.user = null)
    .catch(console.log);
  }

}
