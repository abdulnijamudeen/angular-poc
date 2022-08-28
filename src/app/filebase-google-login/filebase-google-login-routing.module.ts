import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilebaseGoogleLoginComponent } from './filebase-google-login.component';

const routes: Routes = [{ path: '', component: FilebaseGoogleLoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilebaseGoogleLoginRoutingModule { }
