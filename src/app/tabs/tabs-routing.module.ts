import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
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
        path: 'estatura',
        loadChildren: () => import('../estatura/estatura.module').then( m => m.EstaturaPageModule)
      },
      {
        path: 'apitest',
        loadChildren: () => import('../apitest/apitest.module').then( m => m.ApitestPageModule)
      },
      {
        path: '',
        redirectTo: 'home',
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