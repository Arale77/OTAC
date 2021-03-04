import { Component, OnInit } from '@angular/core';
import { Convert, Respuesta } from '../../interfaces/expediente.interfaces';
import { ExpedientesService } from '../../servicios/expedientes.service';

@Component({
  selector: 'app-mis-expedientes',
  templateUrl: './mis-expedientes.component.html',
  styles: [
  ]
})
export class MisExpedientesComponent implements OnInit {
respuesta!: Respuesta;
   
  //const respuesta = Convert.toRespuesta(json);
  constructor( private expedientesService: ExpedientesService) { }

  ngOnInit(): void {

    this.expedientesService.getTipoExpedientes().subscribe(respuesta => this.respuesta = respuesta);
  }

}
