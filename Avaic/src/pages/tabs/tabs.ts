import { Component } from '@angular/core';
import { TelemetriaPage, ElectrodosPage, VariablesPage, EstadosPage } from "../index.paginas";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1:any;
  tab2:any;
  tab3:any;
  tab4:any;

  constructor() {
this.tab1 = TelemetriaPage;
this.tab2 = ElectrodosPage;
this.tab3 = VariablesPage;
this.tab4 = EstadosPage;

  }
}
