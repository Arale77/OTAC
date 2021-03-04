import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convert, Respuesta } from '../interfaces/expediente.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ExpedientesService {
 
  
  private url: string = 'http://172.11.30.112:8181/tipoExpediente'
  constructor(private http: HttpClient) { }
  
  getTipoExpedientes(): Observable <Respuesta>  {
    return this.http.get<Respuesta>(this.url)
  }
}
