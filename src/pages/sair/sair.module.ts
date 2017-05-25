import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Sair } from './sair';

@NgModule({
  declarations: [
    Sair,
  ],
  imports: [
    IonicPageModule.forChild(Sair),
  ],
  exports: [
    Sair
  ]
})
export class SairModule {}
