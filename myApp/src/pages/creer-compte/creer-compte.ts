import { Http, Headers } from '@angular/http';
import { User } from './../user';
import { ContactServiceProvider } from './../contact-service.service';
import { AuthentificationPage } from './../authentification/authentification';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the CreerComptePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creer-compte',
  templateUrl: 'creer-compte.html',
})
export class CreerComptePage {
  user = new User(null, "", "", "", "");
  required = "true";
  submitted = false;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public contactServiceProvider:ContactServiceProvider,
     public http: Http
     ,private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreerComptePage');
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User was created successfully',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  register(myForm: NgForm) {
    console.log(this.user);
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');
  this.http.post('http://localhost:8080/api/users', JSON.stringify(this.user), {headers: headers})
      .subscribe(res => {

       console.log(JSON.stringify(res));
       this.presentToast();
        this.navCtrl.push(AuthentificationPage);

      });



   // this.contactServiceProvider.postUsers(this.user);
 //   this.navCtrl.push(AuthentificationPage);

  }
}
