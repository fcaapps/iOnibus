import { Sair } from './../pages/sair/sair';
import { Inicio } from './../pages/inicio/inicio';
import { Tabs } from './../pages/tabs/tabs';
import { CustomLoggedHeader } from './../components/custom-logged-header/custom-logged-header';
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
    CustomLoggedHeader,
    MyApp,
    HomePage,
    Signup,
    Signin,
    Tabs,
    Inicio,
    Sair
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
    Signin,
    Tabs,
    Inicio,
    Sair    
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
