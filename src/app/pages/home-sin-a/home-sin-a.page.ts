import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-sin-a',
  templateUrl: './home-sin-a.page.html',
  styleUrls: ['./home-sin-a.page.scss'],
})
export class HomeSinAPage implements OnInit {

  usuario:string=""
  
  constructor() { }

  ngOnInit() {
    this.usuario=localStorage.getItem("usuario")??''
  }
}
