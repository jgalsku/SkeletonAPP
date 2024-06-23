import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DbserviceService } from '../dbservice.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private alertController:AlertController,
              private router:Router,
              private dbService: DbserviceService) { }

  usuario: any="";
  password: string=""; 

  ngOnInit() {
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }


  async login() {
    const usuario = await this.dbService.validarUsuario(this.usuario, this.password);
    if (usuario) {
      // Usuario válido, realizar acciones de inicio de sesión
      let NavigationExtras: NavigationExtras = {
        state:{
          usuarioEnviado: this.usuario,
          passwordEnviado: this.password
        }

      } 
      this.router.navigate(['/home'],NavigationExtras);
    } else {
      // Usuario inválido, mostrar mensaje de error
      this.presentAlert('No existe el usuario en la base de datos');
    }
  }
   
  
  crear_cuenta()
  {
    this.router.navigate(['/registro']);
  }

}