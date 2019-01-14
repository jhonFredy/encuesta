import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SecurityService } from 'src/app/security.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class SecurityComponent implements OnInit {

  TOKEN_NAME = "idToken";
  PARAM_USUARIO = "usuario";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serviceSecurity: SecurityService,
    private location: Location
    ) {
  }

  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      let token;
      try{
        token = fragment.split('&')[0].split('=')[1];
      }catch(e){
        this.serviceSecurity.cerrarSesion();
      }
      sessionStorage.setItem(this.TOKEN_NAME, token);
      this.serviceSecurity.validarToken().subscribe((data:any) => {
        sessionStorage.setItem(this.PARAM_USUARIO, JSON.stringify(data.body));
        this.router.navigate(['menu/encuesta']);
      });
  });
}

}
