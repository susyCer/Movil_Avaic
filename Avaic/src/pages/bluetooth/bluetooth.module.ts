import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
//import { BluetoothSerial } from '../../app/app.module';
import { BluetoothPage } from './bluetooth';

//import { IntroduccionPage } from './introduccion';

@NgModule({
  declarations: [
    BluetoothPage,
  ],
  imports: [
    IonicPageModule.forChild(BluetoothPage),
  ],
})
export class BluetoothPageModule {}
