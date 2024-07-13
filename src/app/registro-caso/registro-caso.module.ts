import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroCasoPageRoutingModule } from './registro-caso-routing.module';

import { RegistroCasoPage } from './registro-caso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroCasoPageRoutingModule
  ],
  declarations: [RegistroCasoPage]
})
export class RegistroCasoPageModule {}
