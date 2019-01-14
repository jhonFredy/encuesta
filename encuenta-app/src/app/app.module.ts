
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './_usuario/usuario/usuario.component';
import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdministradorComponent } from './_administrador/administrador/administrador.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule,MatMenuModule,MatToolbarModule,MatSidenavModule,MatDividerModule,MatExpansionModule} from '@angular/material';
import { SecurityComponent } from './_security/security/security.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { MenuComponent } from './_menu/menu/menu.component';
import { LogoutComponent } from './_logout/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    AdministradorComponent,
    SecurityComponent,
    MenuComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatExpansionModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
