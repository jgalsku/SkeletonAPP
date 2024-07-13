import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroCasoPage } from './registro-caso.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroCasoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroCasoPageRoutingModule {}
