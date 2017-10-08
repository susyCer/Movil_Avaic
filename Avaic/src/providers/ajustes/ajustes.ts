import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Platform } from "ionic-angular";

@Injectable()
export class AjustesService{
  ajustes={//obj grabado en local storiage
    mostrar_tutorial: true
  }

  constructor(private platform: Platform) {
    console.log('Hello AjustesProvider Provider');
  }

  cargar_storage(){
    if (this.platform.is("cordova")){

    }else{
      if (localStorage.getItem ("ajustes")){

        this.ajustes = JSON.parse (localStorage.getItem("ajustes"));
      }

    }
    

  }

  guardar_storage(){

    if (this.platform.is("cordova")){

    }else{
      localStorage.setItem ("ajustes", JSON.stringify(this.ajustes) );
    }

  }

}
