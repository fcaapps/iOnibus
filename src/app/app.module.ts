import { Signin } from './../pages/signin/signin';
import { Auth } from './../providers/auth';
import { HttpModule } from '@angular/http';
import { User } from './../providers/user';
import { Signup } from './../pages/signup/signup';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule, AuthProviders, AuthMethods, FirebaseAppConfig } from 'angularfire2';

const firebaseAppConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyBo5A_9j-AhTzUBYh4wfHJePd5JYDSmAec",
    authDomain: "ionic2-firebase-chat-88b08.firebaseapp.com",
    databaseURL: "https://ionic2-firebase-chat-88b08.firebaseio.com",
    storageBucket: "ionic2-firebase-chat-88b08.appspot.com",
    messagingSenderId: "877823765675"
  }

const firebaseAuthConfig = {
  provider: AuthProviders.Custom,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Signup,
    Signin
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig, firebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Signup,
    Signin
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    User,
    Auth
  ]
})
export class AppModule {}
