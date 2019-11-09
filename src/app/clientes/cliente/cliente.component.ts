import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteFormComponent } from '../cliente-form/cliente-form.component';
import { ClienteService } from 'src/app/cliente/services/cliente.service';
import { ClienteViewModel } from 'src/app/cliente/models/cliente-view-model';
import { DatePipe } from '@angular/common';
import { StringifyOptions } from 'querystring';
import { ChamadoModalComponent } from 'src/app/chamado/chamado-modal/chamado-modal.component';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(
    private modalServicer: NgbModal,
    private serviceCliente: ClienteService,
    private modalChamado: NgbModal
    ) { }
//instanciando servicecliente no inicio da aplicação
  ngOnInit() {
    this.mostrarCliente();
  }

  

  addCliente(){
      const modal = this.modalServicer.open(ClienteFormComponent);//para chamar uma classe para abrir uma moodal tenho que 
      //colocar no construdor para ele chama outra telas ser quase "global"
      //verifica que meu coponente tela foi fechado e chama um metodo
      modal.result.then(
        this.handleModalClienteForm.bind(this),
        this.handleModalClienteForm.bind(this)
    )
  }
/// aqui passei para o construtor que ele instacia no começo esse metodo que irá carregar os cliente.
  clientes : ClienteViewModel [] = []
 
  mostrarCliente(){
    this.serviceCliente.getCliente().subscribe(response =>
      {
        this.clientes = [];
        response.docs.forEach(value => {
          const data = value.data();
          const id = value.id;
          const cliente: ClienteViewModel = {
            id: id,
            nome: data.nome,
            endereco: data.endereco,
            casado: data.casado,
            dataMod: data.dataMod
          } 
          this.clientes.push(cliente);
        });
      });
  }

  deletarClick(clienteId : string, index: number){
    this.serviceCliente.deletarCliente(clienteId)
    .then(() => {this.clientes.splice(index, 1);})
    .catch(erro => console.error(erro));
  }

  editarClick(cliente : ClienteViewModel){
      const modal = this.modalServicer.open(ClienteFormComponent)
      this.handleModalClienteForm.bind(this),
      this.handleModalClienteForm.bind(this)
      modal.result.then(
        this.handleModalClienteForm.bind(this),
        this.handleModalClienteForm.bind(this)
      )
      modal.componentInstance.modoInsercao = false;
      modal.componentInstance.cliente =  cliente;
  }
//para alterar no banco de dados o status da pessoa
  checkedCasado(index: number){
    const novoValor = !this.clientes[index].casado;
    this.clientes[index].casado = novoValor;

    const objValor = {casado : novoValor};
    const id = this.clientes[index].id;

    this.serviceCliente.editadarClienteParcial(id, objValor)
  }
////////////////////////////aqui fecha meu metodo para carregar o cliente 
  handleModalClienteForm(response){
    if(response === Object(response)){
      if(response.modoInsercao){
        response.cliente.id = response.id;
        this.clientes.unshift(response.cliente);
       // this.mostrarCliente();
      }
      else{//se for falso  pega resposta da modal e atualiza para carregar as informações vai para modal-form
          let index = this.clientes.findIndex(value => value.id ==  response.id)
          this.clientes[index] = response.cliente;

      }
    }
  }
//chamada de cliente 
  addChamado(clienteId : string, index: number){
    const modal = this.modalChamado.open(ChamadoModalComponent) ;
    modal.result.then(
      this.handleModalChamadoModal.bind(this),
      this.handleModalChamadoModal.bind(this),
      );
      modal.componentInstance.indexCli =  clienteId;
      modal.componentInstance.clienteId =  index;
  }

  handleModalChamadoModal(response){
  
  }
}
