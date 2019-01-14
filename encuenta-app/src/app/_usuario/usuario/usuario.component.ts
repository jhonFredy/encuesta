import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Usuario} from 'src/app/_modelo/Usuario';
import { UsuarioService } from 'src/app/_servicios/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  options: FormGroup;
  
  usuario: Usuario;
  
  nombres: String;

  constructor(private servicioUsuario: UsuarioService, fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  enviarEncuesta(){
    console.log(this.usuario.lenguaje);
    this.servicioUsuario.guardarEncuesta(this.usuario).subscribe(data => {
            
        });
  }

}
