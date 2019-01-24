import { Http ,Headers} from '@angular/http';
import { Contact } from './../contact';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ModifierContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifier-contact',
  templateUrl: 'modifier-contact.html',
})
export class ModifierContactPage {
  contact : Contact= new Contact("24", "", "", "", "", "", "", "", "c");


  constructor(public navCtrl: NavController, public navParams: NavParams
    ,public http:Http,
    public toastCtrl:ToastController
    ) {
      this.contact= new Contact("24", "", "", "", "", "", "", "", "c");
    this.contact = this.navParams.get('contact');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifierContactPage');
    console.log(this.contact);
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
  modifier(contact){
    console.log("modifier");
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .put("http://localhost:8080/api/modifyContact", JSON.stringify(contact), {
        headers: headers
      })
      .subscribe(res => {

        console.log(JSON.stringify(res));
        this.presentToast();
    //     this.navCtrl.push(ListeContactPage,{user:this.owner});
         this.navCtrl.pop();

       });
  }
}
