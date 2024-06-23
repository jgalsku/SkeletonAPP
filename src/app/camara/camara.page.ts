import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import {  DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  public photo: SafeResourceUrl | undefined;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  async takePicture() {
    try {
      const capturedPhoto = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });

       // Use webPath to display the new image instead of base64 since it's already loaded into memory
       this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(capturedPhoto.webPath!);

      // Si deseas mostrar la imagen inmediatamente, puedes establecerla en el template
      // <img [src]="image" *ngIf="image">
    } catch (error) {
      console.error('Error al tomar la foto', error);
    }
  }

}