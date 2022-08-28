import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilebaseGoogleLoginRoutingModule } from './filebase-google-login-routing.module';
import { FilebaseGoogleLoginComponent } from './filebase-google-login.component';
import { PrimeUiModule } from '../prime-ui/prime-ui.module';


@NgModule({
  declarations: [
    FilebaseGoogleLoginComponent
  ],
  imports: [
    CommonModule,
    PrimeUiModule,
    FilebaseGoogleLoginRoutingModule
  ]
})
export class FilebaseGoogleLoginModule { }
