import { Auth } from './../../providers/auth';
import { AlertController, App, MenuController } from 'ionic-angular';
import { Component, Input } from '@angular/core';

import { BaseComponent } from "../base.component";
@Component({
  selector: 'custom-logged-header',
  templateUrl: 'custom-logged-header.html'
})
export class CustomLoggedHeader extends BaseComponent {

  @Input() title: string;

  constructor(
    public alertCtrl: AlertController,
    public authService: Auth,
    public app: App,
    public menuCtrl: MenuController

  ) {
    super(alertCtrl, authService, app, menuCtrl);
  }


}
