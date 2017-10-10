import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from "ionic-angular";

@Injectable()
export class AjustesService{
  ajustes={//obj grabado en local storiage
    mostrar_tutorial: true
  }

  constructor(private platform: Platform,
                private storage: Storage) {
    console.log('Hello AjustesProvider Provider');
  }

  cargar_storage(){
    let promesa = new Promise( ( resolve, reject )=> {

      if ( this.platform.is("cordova")  ){
        console.log ("Inicializando storage");

          this.storage.ready()
              .then(()=>{

                console.log("storage listo")

                  this.storage.get("ajustes")
                    .then( ajustes=>{

                          if (ajustes ){
                              this.ajustes= ajustes;

                          }


                        resolve();

            });

        })


      }else{//computadora
        if (localStorage.getItem ("ajustes") ){
             this.ajustes = JSON.parse (localStorage.getItem("ajustes"));
        }
        resolve();
      }

    });
    return promesa;



  }

  guardar_storage(){

    if (this.platform.is("cordova")){
      this.storage.ready()
            .then (()=>{

              this.storage.set("ajustes", this.ajustes);
            })

    }else{
      localStorage.setItem ("ajustes", JSON.stringify(this.ajustes) );
    }

  }

}
