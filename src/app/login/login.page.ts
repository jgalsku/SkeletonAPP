import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string="";
  password: string="";

  constructor(private alertController:AlertController,private router:Router
  ) { }

  ngOnInit() {
  }


  login(){
      if (this.usuario.trim() == 'miguel' && this.password.trim() == '1234') {
        let nagivationExtras: NavigationExtras = {
          state:{
            usuarioEnviado: this.usuario,
            passwordEnviado: this.password
          }
        }
        this.router.navigate(['/home'],nagivationExtras);
      }
      else{
        this.presentAlert('Incorrecto');
      }

      }


      async presentAlert(message: string) {
        const alert = await this.alertController.create({
          header: 'Error',
          message: message,
          buttons: ['OK']
        });


        await alert.present();
  }


}
