import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreerContactPage } from './creer-contact';

@NgModule({
  declarations: [
    CreerContactPage,
  ],
  imports: [
    IonicPageModule.forChild(CreerContactPage),
  ],
})
export class CreerContactPageModule {}
