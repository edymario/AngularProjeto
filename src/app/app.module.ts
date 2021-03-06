import { ChamadoGuard } from './guard/chamado.guard';
import { ClienteGuard } from './guard/cliente.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
//Bibliotecas do botstrap e firebase e bootstrap
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
import { ClienteComponent } from './clientes/cliente/cliente.component';
import { LoginComponent } from './logins/login/login.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ChamadoModalComponent } from './chamado/chamado-modal/chamado-modal.component';
import { ChamadoViewComponent } from './chamado/chamado-view/chamado-view/chamado-view.component';
import { ChamadoNewComponent } from './chamado/chamado-new/chamado-new.component';
import { UsuarioComponent } from './usuario/usuario/usuario.component';
import { LoginService } from './logins/login-service/login.service';
import { FormsModule }   from '@angular/forms' //formularios para usar ngModel
import { AuthGuardService } from './guard/auth.guard';
import { UsuarioformComponent } from './usuario/usuario-for/usuarioform/usuarioform.component';

//import { Router } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ClienteFormComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    ProdutosComponent,
    ChamadoModalComponent,
    ChamadoViewComponent,
    ChamadoNewComponent,
    UsuarioComponent,
    UsuarioformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //Router,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgbModule,
    ReactiveFormsModule//para formularios
  ],
  providers: [
                LoginService,
                AuthGuardService,
                ClienteGuard,
                ChamadoGuard],
  bootstrap: [AppComponent],
  entryComponents : [ClienteFormComponent,ChamadoModalComponent, UsuarioformComponent]
  //entryComponents : [ChamadoModalComponent]// sempre para colocar um tela modular tenho que declara ela dentro do module
  //para construir uma tela com um pou-op
})
export class AppModule { }
