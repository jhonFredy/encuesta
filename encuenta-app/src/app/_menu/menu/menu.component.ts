import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/security.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  opened: boolean = false;
  isAdmin: boolean = false;

  constructor(
    private securityService: SecurityService ){
  }

  ngOnInit(){

    this.securityService.validarToken().subscribe((data:any) => {
      
    });

    setTimeout(() => {
      this.isAdmin = this.securityService.esRoleAdmin();
    },1500);
  
  }

}
