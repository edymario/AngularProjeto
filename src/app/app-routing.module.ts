import { ChamadoGuard } from './guard/chamado.guard';
import { ClienteGuard } from './guard/cliente.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from 'src/app/clientes/cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { ChamadoNewComponent } from './chamado/chamado-new/chamado-new.component';
import { LoginComponent } from './logins/login/login.component';
import { AuthGuardService } from './guard/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent , canActivate:[AuthGuardService], /*children:[/* passar roda fihas]*/ },
  { path: 'clientes/cliente', component: ClienteComponent, canActivate:[AuthGuardService], canActivateChild:[ClienteGuard]},
  { path: 'home', component: HomeComponent, canActivate:[AuthGuardService] },
  { path: 'chamadonew', component: ChamadoNewComponent,  canActivate:[AuthGuardService],canActivateChild:[ChamadoGuard]},
  { path: 'index', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
