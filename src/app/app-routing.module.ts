import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';



import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CrearJuegoComponent } from './pages/crear-juego/crear-juego.component';
import { TablerosCreadosComponent } from './pages/tableros-creados/tableros-creados.component';
import { TableroComponent } from './pages/tablero/tablero.component';

const routes: Routes = [

  {path: "login", component:LoginComponent,
  ...canActivate(()=> redirectLoggedInTo(['/']))},
  {path: "", component:HomeComponent,
  ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path: 'crearJuego', component: CrearJuegoComponent,
  ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path: 'listaTablero', component: TablerosCreadosComponent,
  ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path: 'tablero', component: TableroComponent,
  ...canActivate(()=> redirectUnauthorizedTo(['/login']))}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
