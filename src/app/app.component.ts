import { Component, OnInit } from '@angular/core';
import { App, BackButtonListenerEvent } from '@capacitor/app';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {
    App.addListener('backButton', (event: BackButtonListenerEvent) => {
      if(event.canGoBack) {
        window.history.back();
      } else {
        App.exitApp()
      }
    });
  }

  ngOnInit() {
      this.primengConfig.ripple = true;
  }
}
