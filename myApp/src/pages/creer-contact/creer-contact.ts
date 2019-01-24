import { ListeContactPage } from './../liste-contact/liste-contact';
import { Http ,Headers} from '@angular/http';
import { Contact } from './../contact';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the CreerContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creer-contact',
  templateUrl: 'creer-contact.html',
})
export class CreerContactPage {
  contact = new Contact("24", "", "", "", "", "", "", "", 'c');
  owner: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,
    public http: Http,
    public toastCtrl:ToastController) {
      this.owner = this.navParams.get('user');
      if(this.owner){
      this.contact = new Contact("24", "", "", "", "", "", "", "", this.owner);
      }

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad CreerContactPage');
  }
  howConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
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
  creer() {

    console.log(this.contact);
  


    let headers = new Headers();
    headers.set('Content-Type', 'application/json');
      return this.http
        .post("http://localhost:8080/api/contacts", JSON.stringify(this.contact), {headers: headers})
        .subscribe(res => {

          console.log(JSON.stringify(res));
          this.presentToast();
           this.navCtrl.push(ListeContactPage,{user:this.owner});

         });



 
  }

}
