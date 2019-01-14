
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './_usuario/usuario/usuario.component';
import { AdministradorComponent } from './_administrador/administrador/administrador.component';
import { SecurityComponent } from './_security/security/security.component';
import { MenuComponent } from './_menu/menu/menu.component';
import { LogoutComponent } from './_logout/logout/logout.component';


const appRoutes: Routes = [
    { path: 'menu', component: MenuComponent ,children: [
    { path: 'encuesta', component: UsuarioComponent },
    { path: 'usuarios', component: AdministradorComponent },
    ]},
    { path: 'security', component: SecurityComponent },
    { path: 'logout', component: LogoutComponent },
    { path: '**', component: SecurityComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}