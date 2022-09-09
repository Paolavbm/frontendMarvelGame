import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-crear-juego',
  templateUrl: './crear-juego.component.html',
  styleUrls: ['./crear-juego.component.scss']
})
export class CrearJuegoComponent implements OnInit {
  listaUsuarios:Array<Usuario>=new Array <Usuario>();
  constructor(private user:UserService) { }

  ngOnInit(): void {
    this.user.listar().subscribe(user => {
      console.log(user);
      this.listaUsuarios=user
    });
  }



}
