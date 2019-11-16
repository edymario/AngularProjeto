import { UsuarioViewModel } from './../model/usuario-view-model';
import { UsuarioformComponent } from './../usuario-for/usuarioform/usuarioform.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario-service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private userSevice: UsuarioService
    ) { }

    usuarios: UsuarioViewModel [] = []
    usuario: UsuarioViewModel;

  ngOnInit() {
    this.mostrarUsuario();
  }

  addUsuario(){
    console.log("teste");
    const modal = this.modalService.open(UsuarioformComponent);
    modal.result.then(
      this.handleModalUsuarioForm.bind(this),
      this.handleModalUsuarioForm.bind(this)
    );
  }



  mostrarUsuario() {
    this.userSevice.getUSer().subscribe(response => {
        this.usuarios = [];
        response.docs.forEach(value => {
          const data = value.data();
          const id = value.id;
          const usuario: UsuarioViewModel = {
            id: id,
            nome: data.nome,
            usuario: data.usuario,
            email: data.email,
            telefone: data.telefone,
            perfil: data.perfil,
            senha: data.senha
          }
          console.log("estou aqui");
          console.log(usuario, "valores");
          this.usuarios.push(usuario);
        });
      });
  }

  deletarClick(userId: string, index: number){
    console.log(userId);
    this.userSevice.deletarUser(userId)
    .then(() => {this.usuarios.splice(index, 1);
    })
    .catch(erro => console.error(erro));
  }

  editarClick(usuario: UsuarioViewModel) {
      const modal = this.modalService.open(UsuarioformComponent);
      this.handleModalUsuarioForm.bind(this),
      this.handleModalUsuarioForm.bind(this);
      modal.result.then(
        this.handleModalUsuarioForm.bind(this),
        this.handleModalUsuarioForm.bind(this)
      );
      modal.componentInstance.modoInsercao = false;
      modal.componentInstance.usuario =  usuario;
  }
//para alterar no banco de dados o status da pessoa
  /*checkedCasado(index: number){
    const novoValor = !this.usuarios[index].casado;
    this.clientes[index].casado = novoValor;

    const objValor = {casado : novoValor};
    const id = this.clientes[index].id;

    this.serviceCliente.editadarClienteParcial(id, objValor)
  }*/
////////////////////////////aqui fecha meu metodo para carregar o cliente
  handleModalUsuarioForm(response) {
    if(response === Object(response)) {
      if(response.modoInsercao){
        response.usuario.id = response.id;
        this.usuarios.unshift(response.usuario);
       // this.mostrarCliente();
      } else {
          //se for falso  pega resposta da modal e atualiza para carregar as informações vai para modal-form
          let index = this.usuarios.findIndex(value => value.id ==  response.id);
          this.usuarios[index] = response.usuario;

      }
    }
  }

}
