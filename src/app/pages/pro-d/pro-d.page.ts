import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { CrudfirebaseService, Viajes } from 'src/app/servicio/crudfirebase.service';

@Component({
  selector: 'app-pro-d',
  templateUrl: './pro-d.page.html',
  styleUrls: ['./pro-d.page.scss'],
})
export class ProDPage implements OnInit {

  constructor(private CrudServ: CrudfirebaseService) { }

  n_viaje: Viajes = { partida: '', destino:'', capacidad_vehiculo: 0, precio:0, lugar_encuentro:'' }

  ngOnInit() { }


  guardar() {
    this.CrudServ.crearViaje(this.n_viaje).then(() => {
      alert("lo grabe")
    }).catch((err) => {
      console.log("Error")
    })
  }
}
