import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SexPageRoutingModule } from './sex-routing.module';

import { SexPage } from './sex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SexPageRoutingModule
  ],
  declarations: [SexPage]
})
export class SexPageModule {}
