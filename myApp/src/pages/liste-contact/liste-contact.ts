import { AuthentificationPage } from './../authentification/authentification';
import { ContactPage } from './../contact/contact';
import { ContactServiceProvider } from './../contact-service.service';
import { CreerContactPage } from './../creer-contact/creer-contact';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreerComptePage } from '../creer-compte/creer-compte';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Contact } from '../contact';

/**
 * Generated class for the ListeContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste-contact',
  templateUrl: 'liste-contact.html',
})
export class ListeContactPage {
  listContacts: Contact[];
  owner: string="c";
  contactId: string;
  test:string="test";
  items =[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public contactServiceProvider:ContactServiceProvider) {
    this.owner = this.navParams.get('user');
    console.log("owner");
    this.initializeItems();

console.log(this.owner);
  }
  initializeItems(){
    this.contactServiceProvider.getUserContacts(this.owner).then(data => {
      this.listContacts = data.map(contact => {
        return {
          contactId: contact._id,
          firstname: contact.firstname,
          lastname: contact.lastname,
          email: contact.email,
          phone: contact.phone,
          city: contact.city,
          address: contact.address,
          service: contact.service,
          owner: contact.owner,
        };
    });
    });

}

ionViewDidLoad() {

 // this.initializeItems();
}

  getItems(ev: any) {
   //

    const val = ev.target.value;

    // set val to the value of the searchbar

if(!val ||val.trim() == '' ){
  this.initializeItems();
}
    // if the value is an empty string don't filter the items


    if (val && val.trim() != '') {
      this.listContacts = this.listContacts.filter((item) => {
        console.log((item.firstname));
        console.log((item.firstname).toLowerCase().indexOf(val.toLowerCase()) > -1);
        return ((item.firstname).toLowerCase().indexOf(val.toLowerCase()) > -1 ||(item.lastname).toLowerCase().indexOf(val.toLowerCase()) > -1||(item.service).toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

  }


 buttonClick(contact : Contact){
  console.log('Contact Sent' +contact.firstname);
  this.navCtrl.push(ContactPage,{contact:contact});

 }



 Add(){
  this.navCtrl.push(CreerContactPage,{user:this.owner});

 }
 exit(){


  this.navCtrl.setRoot(AuthentificationPage);
 }
}
