import { UsuarioService } from './../../_servicios/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/_modelo/Usuario';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
   
    dataSource: Usuario[];

  displayedColumns: string[] = ['nombres', 'apellidos', 'edad', 'lenguaje'];
  

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.usuarioService.listarEncuestas().subscribe(data =>{
        this.dataSource = data;
    });

  }

}
