import { ModifierContactPage } from './../modifier-contact/modifier-contact';
import { ListeContactPage } from './../liste-contact/liste-contact';
import { CreerContactPage } from './../creer-contact/creer-contact';
import { Contact } from './../contact';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { RequestOptions, Http ,Headers} from '@angular/http';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
contact: Contact;
  constructor(public navCtrl: NavController, public navParams: NavParams
    ,public alertCtrl: AlertController,
   public http:Http,
   public toastCtrl:ToastController) {
    this.contact = this.navParams.get('contact');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');


    console.log(" contact "+this.contact);
//    console.log(this.contact);
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
modify(){
  this.navCtrl.push(ModifierContactPage,{contact:this.contact});
}
presentToast() {
  let toast = this.toastCtrl.create({
    message: 'Utilsateur cree',
    duration: 3000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
delete(email){

    let headers = new Headers();
    headers.set("Content-Type", "application/json");
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
      .subscribe(res => {

        console.log(JSON.stringify(res));
        this.presentToast();
         this.navCtrl.push(ListeContactPage,{user:this.contact.owner});

       });


}
}
