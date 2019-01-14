import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {BasicAccess} from 'src/app/_modelo/BasicAccess';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  HOST_BACKEND = `https://nw4jwkftnk.execute-api.us-east-1.amazonaws.com/prod`;
  PARAM_USUARIO = "usuario";
  TOKEN_NAME = "idToken";


  urlOauth: string = `${this.HOST_BACKEND}/api/security/token`;
  urlRefreshToken: string = `${this.HOST_BACKEND}/api/security/refresh-token`;
  urlSignOut: string = `${this.HOST_BACKEND}/api/security/signout`;

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(DOCUMENT) private document: any) { }

    validarToken() {
      return this.http.post(this.urlOauth, "");
    }
  
    cerrarSesion() {
      let request = new BasicAccess();
      request.token = sessionStorage.getItem(this.TOKEN_NAME);
      //request.token = sessionStorage.getItem(ACCESS_TOKEN_NAME);
      /*
      this.http.post(this.urlSignOut, request).subscribe((data:any)=>{
        console.log(data.body);
      }, (error)=>{
        console.log(error);
      });
      */
      sessionStorage.clear();
      console.log('Se borro tokens de storage');
      setTimeout(()=> {

        this.document.location.href = "https://encuesta-curso-ws.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=7jlp76p9d549n5si55uiqldu24&redirect_uri=https://d9vhwbt2bmfv0.cloudfront.net/security";
      },500);
    }
  
    esRoleAdmin(){
      let usuario = JSON.parse(sessionStorage.getItem(this.PARAM_USUARIO));
      let rpta = false;
      if(usuario != null && usuario.authorities !== null) {
        usuario.authorities.forEach(element => {
          if(element.authority == "ROLE_ADMIN" || element.authority == "ROLE_ADMINISTRADOR"){   
            rpta = true;
          }
        });
      }
      return rpta;
    }

}
