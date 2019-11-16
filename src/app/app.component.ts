import { Component } from '@angular/core';
import { LoginService } from './logins/login-service/login.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto em Angular';

  mostrarMenu: boolean = false;

  constructor(private loginService: LoginService){

  }

  ngOnInit (){
    this.loginService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }
}
