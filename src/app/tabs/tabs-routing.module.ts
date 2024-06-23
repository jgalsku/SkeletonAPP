import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'registro',
        loadChildren: () => import('../registro/registro.module').then( m => m.RegistroPageModule)
      },
      {
        path: 'sex',
        loadChildren: () => import('../sex/sex.module').then( m => m.SexPageModule)
      },
      {
        path: 'edad',
        loadChildren: () => import('../edad/edad.module').then( m => m.EdadPageModule)
      },
      {
        path: '',
        redirectTo: 'registro',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}