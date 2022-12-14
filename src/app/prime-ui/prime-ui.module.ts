import { NgModule } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { PanelModule } from 'primeng/panel';
import { ImageModule } from 'primeng/image';

export const PRIME_UI_MODULES = [
  ToolbarModule,
  ButtonModule,
  CardModule,
  AvatarModule,
  TagModule,
  PanelModule,
  ImageModule,
];

@NgModule({
  imports: [
    ...PRIME_UI_MODULES
  ],
  exports: [
    ...PRIME_UI_MODULES
  ]
})
export class PrimeUiModule { }
