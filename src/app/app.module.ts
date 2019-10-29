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

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ClienteFormComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    ProdutosComponent,
    ChamadoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgbModule,
    ReactiveFormsModule//para formularios
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [ClienteFormComponent,ChamadoModalComponent]
  //entryComponents : [ChamadoModalComponent]// sempre para colocar um tela modular tenho que declara ela dentro do module
  //para construir uma tela com um pou-op
})
export class AppModule { }
