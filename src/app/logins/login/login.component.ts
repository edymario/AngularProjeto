import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login-service/login.service';
import { Usuario } from './usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();
  private senha: Usuario =  new Usuario();

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  login(){
    this.loginService.validarLogin(this.usuario);
  }

}
