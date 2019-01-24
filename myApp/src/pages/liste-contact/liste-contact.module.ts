import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeContactPage } from './liste-contact';

@NgModule({
  declarations: [
    ListeContactPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeContactPage),
  ],
})
export class ListeContactPageModule {}
