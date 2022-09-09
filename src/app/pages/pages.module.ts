import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CrearJuegoComponent } from './crear-juego/crear-juego.component';
import { TablerosCreadosComponent } from './tableros-creados/tableros-creados.component';
import { TableroComponent } from './tablero/tablero.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    CrearJuegoComponent,
    TablerosCreadosComponent,
    TableroComponent

  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    HomeComponent,
    LoginComponent,
    CrearJuegoComponent,
    TablerosCreadosComponent,
    TableroComponent
  ]
})
export class PagesModule { }
