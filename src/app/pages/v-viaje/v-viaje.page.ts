import { Component, OnInit } from '@angular/core';
import { CrudfirebaseService, Viajes} from 'src/app/servicio/crudfirebase.service';

@Component({
  selector: 'app-v-viaje',
  templateUrl: './v-viaje.page.html',
  styleUrls: ['./v-viaje.page.scss'],
})
export class VViajePage implements OnInit {
  
  constructor(private CrudServ: CrudfirebaseService) { }
  lista_viajes: Viajes[]=[]
  n_viaje: Viajes = { partida: '', destino:'', capacidad_vehiculo: 0, precio:0, lugar_encuentro:'' }
  sw:boolean =false //flag
  sw2:boolean =true //flag

 
  ngOnInit() { 
    this.listar()
  }

  listar(){
    this.CrudServ.listarViaje().subscribe(data=>{
      this.lista_viajes=data
    })
  }


}
