import { Http} from "@angular/http";

import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ContactServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactServiceProvider {
  constructor(public http: Http) {
    console.log("Hello ContactServiceProvider Provider");
  }
/*
  public getUser(email: string, password: string) {
     let myparams = { email: email, password: password };
    return this.http
      .get("http://localhost:8080/api/user", { params: myparams })
      .subscribe((response) => {
        response.json();
        console.log(response);

      },(error)=>{
console.log(error);
      })
  }
*/
/*   public getUsers() {
    return this.http
      .get("http://localhost:8080/api/users")
      .toPromise()
      .then(response => response.json())
      .catch(error => console.log("une erreur est detectee " + error));
  }
*/
  public getUserContacts(owner: string) {
    let myparams = { owner: owner };
    return this.http
      .get("http://localhost:8080/api/userContacts", { params: myparams })
      .toPromise()
      .then(response => response.json())
      .catch(error => console.log("une erreur est detectee" + error));
  }
/*
  public getContacts(service: string) {
    let myparams = { service: service };
    return this.http
      .get("http://localhost:8080/api/contacts", { params: myparams })
      .toPromise()
      .then(response => response.json())
      .catch(error => console.log("une erreur est detectee" + error));
  }

  public getAllContacts() {
    return this.http
      .get("http://localhost:8080/api/allcontacts")
      .toPromise()
      .then(response => response.json())
      .catch(error => console.log("une erreur est detectee" + error));
  }
*/
/*
  public postUsers(obj: any): any {
    let headers = new Headers();
    headers.set("Content-Type", "application/json");
    return this.http
      .post("http://localhost:8080/api/users", JSON.stringify(obj), {
        headers: headers
      })
      .toPromise()
      .then(response => response.json())
      .catch(error => console.log("une erreur est detectee" + error));
  }
  */
/*
  public postContacts(obj: any): any {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:8080/api/contacts", JSON.stringify(obj), {
        headers: headers
      })
      .toPromise()
      .then(response => response.json())
      .catch(error => console.log("une erreur est detectee" + error));
  }
  public deleteContact(email) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let body = {
      email: email
    };
    return this.http
      .delete(
        "http://localhost:8080/api/deleteContact",
        new RequestOptions({
          headers: headers,
          body: body
        })
      )
      .toPromise()
      .then(response => response.json())
      .catch(error => console.log("une erreur est detectee" + error));
  }

  public modifierContact(obj): any {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .put("http://localhost:8080/api/modifyContact", JSON.stringify(obj), {
        headers: headers
      })
      .toPromise()
      .then(response => response.json())
      .catch(error => console.log("une erreur est detectee" + error));
  } */
}
