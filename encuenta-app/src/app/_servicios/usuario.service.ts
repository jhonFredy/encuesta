import { Usuario } from './../_modelo/Usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  HOST_BACKEND = `https://nw4jwkftnk.execute-api.us-east-1.amazonaws.com/prod`;

  URL_SERVICIO: string =`${this.HOST_BACKEND}/api/v1/encuestas/guardarEncuesta`;

  URL_LISTAR_ENCUESTA_SERVICIO: string =`${this.HOST_BACKEND}/api/v1/encuestas/listarEncuestas`;

  constructor(private http: HttpClient) { }

  guardarEncuesta(usuario:Usuario): Observable<Usuario>{
   return  this.http.post(this.URL_SERVICIO,usuario).pipe(tap((usuario: Usuario) => alert("Sus datos fueron almacenados correctamente!!")),
   catchError(this.handleError<Usuario>('guardarEncuesta')));
  }

  listarEncuestas(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.URL_LISTAR_ENCUESTA_SERVICIO).pipe(tap((usuario: Usuario[]) => console.log(`lista satisfactoria`)),
    catchError(this.handleError<Usuario[]>('guardarEncuesta')));
  }

  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      alert("Ocurrio un error al guardar sus datos!!");
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
