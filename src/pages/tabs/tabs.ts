import { Sair } from './../sair/sair';
import { Inicio } from './../inicio/inicio';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
@IonicPage()
export class Tabs {

  tab1Root: any = Inicio;
  tab2Root: any = Sair;

  constructor(public navCtrl: NavController) {}

}
