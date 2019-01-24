import { User } from './../user';
import { Http } from '@angular/http';
import { ListeContactPage } from './../liste-contact/liste-contact';
import { CreerComptePage } from './../creer-compte/creer-compte';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App, LoadingController, ToastController, AlertController } from 'ionic-angular';


/**
 * Generated class for the AuthentificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-authentification',
  templateUrl: 'authentification.html',
})
export class AuthentificationPage {
    email: string;
  password: string;
  myuser: User;
  connected = 0;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
     public viewCtrl: ViewController,
     public appCtrl: App,
     public loadingCtrl: LoadingController,
     private toastCtrl: ToastController,
     public alertCtrl: AlertController,

     public http:Http ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthentificationPage');
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Oups!',
      subTitle: 'Le mot de passe ou email est incorrect!',
      buttons: ['OK']
    });
    alert.present();
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Votre inscription est effectuée avec succès',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
    login() {
    console.log('login button');
//this.showAlert();

let myparams = { 'email': this.email, 'password': this.password };


  this.http.get('http://localhost:8080/api/user', { params: myparams } )
  .subscribe(res => {
   this.myuser = res.json();
  // this.myuser = res.text();
   console.log("body");
     //   console.log(this.myuser.email);
        if (res.status==200 && res.json()!= null) {
          this.presentToast();
    

         this.navCtrl.push(ListeContactPage,{user:this.myuser.email})
        } else {
          this.showAlert();
        }



  });
  }

  register() {
    console.log('register button');
    this.navCtrl.push(CreerComptePage);
  }
}
