import { ModifierContactPage } from './../pages/modifier-contact/modifier-contact';
import { ContactPage } from './../pages/contact/contact';
import { StorageService } from './../pages/StorageService';
import { ContactServiceProvider } from './../pages/contact-service.service';
import { CreerContactPage } from './../pages/creer-contact/creer-contact';
import { AuthentificationPage } from './../pages/authentification/authentification';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreerComptePage } from '../pages/creer-compte/creer-compte';
import { ListeContactPage } from '../pages/liste-contact/liste-contact';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AuthentificationPage,
    CreerComptePage,
    ListeContactPage,
    CreerContactPage,
    ContactPage,
    ModifierContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AuthentificationPage,
    CreerComptePage,
    ListeContactPage,
    CreerContactPage,
    ContactPage,
    ModifierContactPage

  ],
  providers: [
    ContactServiceProvider,
    StatusBar,
    SplashScreen
    ,StorageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
