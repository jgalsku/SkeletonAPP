import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; 
import { DbserviceService } from '../dbservice.service';
 

@Component({
  selector: 'app-registro-caso',
  templateUrl: './registro-caso.page.html',
  styleUrls: ['./registro-caso.page.scss'],
})
export class RegistroCasoPage {
  usuarioRecibido: any='';
  passwordRecibido: any='';

  casos: any='';

  casoID: any='';
  casoUbica: any='';
  casoCausa: any='';
  casoSex: any='';
  casoEdad: any='';
  casoEstat: any='';


  isDBReady: boolean = false;


  constructor(private router:Router,
              private activateroute:ActivatedRoute, 
              private alertController:AlertController,
              private dbService: DbserviceService) 
              
              {
    this.activateroute.queryParams.subscribe( params =>{
      if(this.router.getCurrentNavigation()?.extras?.state){

        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnviado'];
        this.passwordRecibido = this.router.getCurrentNavigation()?.extras?.state?.['passwordEnviado']; 

        console.log();
      }
    })
  }

 
  
  ngOnInit() {
    this.dbService.getIsDBReady().subscribe(isReady => {
      this.isDBReady = isReady;
      if (isReady) {
        // Aquí puedes llamar a funciones para cargar datos, etc. desde la base de datos
      }
    });
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }


  guardar() {
    if (this.casoID.trim() === '') {
      this.presentAlert('Error: ID vacío');
    } else {
      this.guardarDatosCaso();  
    }
  }

  guardarDatosCaso() {
    this.dbService.insertCaso(this.casoID, this.casoUbica, this.casoCausa , this.casoSex , this.casoEdad , this.casoEstat )
      .then(() => {
        this.presentAlert('Datos del caso guardados exitosamente');
        // Aquí puedes añadir lógica adicional, como mostrar un mensaje de éxito al usuario.
      })
      .catch(error => {
        this.presentAlert('Error al guardar datos del caso:'+ error);
        // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error al usuario.
      });
  }

  
  volver() {
    this.router.navigate(['/home']);
  }


}