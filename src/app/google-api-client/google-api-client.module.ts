import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleApiClientRoutingModule } from './google-api-client-routing.module';
import { GoogleApiClientComponent } from './google-api-client.component';


@NgModule({
  declarations: [
    GoogleApiClientComponent
  ],
  imports: [
    CommonModule,
    GoogleApiClientRoutingModule
  ]
})
export class GoogleApiClientModule { }
