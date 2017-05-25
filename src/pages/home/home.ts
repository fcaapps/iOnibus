import { Auth } from './../../providers/auth';
import { User } from './../../providers/user';
import { UserModel } from './../../models/user.models';
import { FirebaseListObservable } from 'angularfire2';
import { Signup } from './../signup/signup';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: FirebaseListObservable<UserModel[]>;

  constructor(
    public authService : Auth,
    public navCtrl: NavController,
    public userService: User
  ) {

  }

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

  ionViewDidLoad() {
    this.users = this.userService.users;
  }

  onChatCreate(user: User): void {
    console.log('User', user)
  }

  onSignup(): void {
    this.navCtrl.push(Signup);
  }

}
