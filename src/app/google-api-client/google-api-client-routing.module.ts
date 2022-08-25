import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleApiClientComponent } from './google-api-client.component';

const routes: Routes = [{ path: '', component: GoogleApiClientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleApiClientRoutingModule { }
