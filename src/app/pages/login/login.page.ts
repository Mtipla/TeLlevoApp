import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = ''
  contrasena: string = ''

  constructor(private navCtrl: NavController,
              private alertC: AlertController) { }

  ngOnInit() {
  }

  validar_cond() {
    if (this.contrasena == '1234') {
      localStorage.setItem("usuario", this.usuario)
      this.navCtrl.navigateForward(['/home'])
    } else {
      this.presentAlert()
    }
  }
  validar_pasaj() {
    if (this.contrasena == '1234') {
      localStorage.setItem("usuario", this.usuario)
      this.navCtrl.navigateForward(['/home-sin-a'])
    } else {
      this.presentAlert()
    }
  }

  async presentAlert() {
    const alert = await this.alertC.create({
      header: 'Error!',
      subHeader: 'Contraseña / Usuario invalido',
      buttons: ['Cerrar'],
    });

    await alert.present();
  }
}
