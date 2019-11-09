import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../login/usuario';
import { Router } from '@angular/router';

//import { Http } from '@angular/http';
//const axios = require('axios').default;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private usuarioValidado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router:Router) { }

  validarLogin(usuario:Usuario){

      if(usuario.nome === 'teste' &&  usuario.senha === '123'){
          this.usuarioValidado = true;
          this.mostrarMenuEmitter.emit(true);
          this.router.navigate(['/']);
      } else {
          this.usuarioValidado = false;
          this.mostrarMenuEmitter.emit(false);
      }
  }

  usuarioEstaAutenticado(){
    return  this.usuarioValidado;
  }
 /*buscaUsario() {
     axios.get({
            url: "login.php",
            date : { usuario : "teste", senha: "senha "},
            headers : "aplication/json"

          })
          .then ( function ( response ) {
            console.log(response)
          })
          .catch ( function ( error ) {
            console.log (error);
        })
        .finally(function () {
          // always executed
        });
  }*/
}
