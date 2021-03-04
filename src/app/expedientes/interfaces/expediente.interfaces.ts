// To parse this data:
//
//   import { Convert, Respuesta } from "./file";
//
//   const respuesta = Convert.toRespuesta(json);

export interface Respuesta {
  success: boolean;
  message: string;
  expediente: Expediente[];
}

export interface Expediente {
  idTipoExpediente:     number;
  descripcion:          string;
  nombreTipoExpediente: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toRespuesta(json: string): Respuesta {
      return JSON.parse(json);
  }

  public static respuestaToJson(value: Respuesta): string {
      return JSON.stringify(value);
  }
}
 