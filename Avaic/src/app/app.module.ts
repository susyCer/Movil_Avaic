import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import {  TelemetriaPage,
          ElectrodosPage,
          VariablesPage,
          EstadosPage,
          TabsPage
            } from "../pages/index.paginas";


//plugin
import { IonicStorageModule } from '@ionic/storage';

//servicioo
import { AjustesService } from '../providers/ajustes/ajustes';



@NgModule({
  declarations: [
    MyApp,
    TelemetriaPage,
    ElectrodosPage,
    VariablesPage,
    EstadosPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TelemetriaPage,
    ElectrodosPage,
    VariablesPage,
    EstadosPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   AjustesService
  ]
})
export class AppModule {}
