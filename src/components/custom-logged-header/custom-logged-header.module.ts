import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomLoggedHeader } from './custom-logged-header';

@NgModule({
  declarations: [
    CustomLoggedHeader,
  ],
  imports: [
    IonicPageModule.forChild(CustomLoggedHeader),
  ],
  exports: [
    CustomLoggedHeader
  ]
})
export class CustomLoggedHeaderModule {}
