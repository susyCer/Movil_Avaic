import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelemetriaPage } from './telemetria';

@NgModule({
  declarations: [
    TelemetriaPage,
  ],
  imports: [
    IonicPageModule.forChild(TelemetriaPage),
  ],
})
export class TelemetriaPageModule {}
