import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { GenerarComponent } from './paginas/generar/generar.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';
import { ExpedienteComponent } from './paginas/expediente/expediente.component';
import { HomeComponent } from './paginas/home/home.component';
import { MisExpedientesComponent } from './paginas/mis-expedientes/mis-expedientes.component';
import { ExpedientesRoutingModule } from './expedientes-routing.module';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    GenerarComponent,
    BuscarComponent,
    ExpedienteComponent,
    HomeComponent,
    MisExpedientesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExpedientesRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class ExpedientesModule { }
