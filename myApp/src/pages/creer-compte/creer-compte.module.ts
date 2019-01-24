import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreerComptePage } from './creer-compte';

@NgModule({
  declarations: [
    CreerComptePage,
  ],
  imports: [
    IonicPageModule.forChild(CreerComptePage),
  ],
})
export class CreerComptePageModule {}
