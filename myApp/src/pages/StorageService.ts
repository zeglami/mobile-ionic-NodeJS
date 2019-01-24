import { AuthentificationPage } from './authentification/authentification';
import { Injectable } from "@angular/core";
import { User } from "./user";
import { NavController } from "ionic-angular";
@Injectable()
export class StorageService {
  public scope: Array<any> | boolean = false;
  public user: User;
  constructor(public navCtrl: NavController) {}

  public getScope(): Array<any> | boolean {
    return this.scope;
  }

  public setScope(scope: any): void {
    this.scope = scope;
  }

  public setUser(user: any) {
    this.user = user;
  }
  public getUser() {
    return this.user;
  }
  public loggedIn(): boolean {
    if (this.user == null) {
      return true;
    } else {
      return false;
    }
  }
  logoutUser() {
    this.user = null;
    this.navCtrl.push(AuthentificationPage);
  }
}
