import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from 'src/app/clientes/cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clientes/cliente', component: ClienteComponent },
  { path: 'home', component: HomeComponent },
  { path: 'produtos', component: ProdutosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
