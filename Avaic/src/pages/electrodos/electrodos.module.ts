import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElectrodosPage } from './electrodos';

@NgModule({
  declarations: [
    ElectrodosPage,
  ],
  imports: [
    IonicPageModule.forChild(ElectrodosPage),
  ],
})
export class ElectrodosPageModule {}
