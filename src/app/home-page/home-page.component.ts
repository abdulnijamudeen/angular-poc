import { Component, OnInit } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user: any;
  reason: any;
  out: any;
  login() {
    GoogleAuth.signIn()
    .then(user => this.user = user)
    .catch(reason => this.reason = reason);
  }

  logout() {
    GoogleAuth.signOut()
    .then(v => this.out = v)
    .catch(reason => this.reason = reason);
  }

}
