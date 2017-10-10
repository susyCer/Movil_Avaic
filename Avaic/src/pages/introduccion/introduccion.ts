import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

//import {TabsPage } from "../home/home";
import { TabsPage } from "../tabs/tabs";
import { AjustesService } from "../../providers/ajustes/ajustes";

@IonicPage()
@Component({
  selector: 'page-introduccion',
  templateUrl: 'introduccion.html',
})
export class IntroduccionPage {

  slides:any[] = [
    {
      title: "Bienvenido!",
      description: "Usando ambas manos, delice la diadema teniendo cuidado de colocar los sensores justo detrás  de cada lobulo de la oreja<br><br>",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "Colocación",
      description: "Los 2 sensores delanteros deben estar aproximadamente en la línea cabello o alrededor del ancho de 3 dedor por encia de sus cejas",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "Una vez listo",
      description: "Presione y sostenga los 2 sensores de referencia situados justo arriba y detrás de sus oídos durante unos 5-10 segundos.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];


  constructor(public navCtrl: NavController,
                private _ajustes: AjustesService) {
  }
saltar_tutorial(){
  this._ajustes.ajustes.mostrar_tutorial = false;
  this._ajustes.guardar_storage ();

  this.navCtrl.setRoot (TabsPage);

}


}
