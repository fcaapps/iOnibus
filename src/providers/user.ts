import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { UserModel } from "./../models/user.models"; 
import { BaseService } from "./base";

import { Observable } from 'rxjs';

@Injectable()
export class User extends BaseService {

  users: FirebaseListObservable<UserModel[]>;

  constructor(
    public af: AngularFire, 
    public http: Http
  ) {
    super();
    this.users = this.af.database.list('/users');
  }

  create(user: UserModel): firebase.Promise<void> {
    return this.af.database.object(`/users/${user.uid}`)
      .set(user)
      .catch(this.handlePromiseError);
  }

  userExists(username:string): Observable<boolean> {
    return this.af.database.list(`/users`, {
      query: {
        orderByChild: 'username',
        equalTo: username
      }
    }).map((users: User[]) => {
      return users.length > 0;
    }).catch(this.handlePromiseError);
    
  } 

}
