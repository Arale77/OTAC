import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './paginas/buscar/buscar.component';
import { ExpedienteComponent } from './paginas/expediente/expediente.component';
import { GenerarComponent } from './paginas/generar/generar.component';
import { HomeComponent } from './paginas/home/home.component';
import { MisExpedientesComponent } from './paginas/mis-expedientes/mis-expedientes.component';

const rutas: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'mis-expedientes',
        component: MisExpedientesComponent
      },
      {
        path: 'generar',
        component: GenerarComponent
      },
      {
        path: 'editar/:id',
        component: GenerarComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: ':id',
        component: ExpedienteComponent
      },
      {
        path: '**',
        redirectTo: 'mis-expedientes'
      }
    ]
  }
];



@NgModule({
  imports: [
    RouterModule.forChild( rutas )
  ],
  exports: [
    RouterModule
  ]
})
export class ExpedientesRoutingModule { }
