import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SexPage } from './sex.page';

const routes: Routes = [
  {
    path: '',
    component: SexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SexPageRoutingModule {}
