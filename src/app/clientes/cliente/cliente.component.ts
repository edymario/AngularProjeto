import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteFormComponent } from '../cliente-form/cliente-form.component';
import { ClienteService } from 'src/app/cliente/services/cliente.service';
import { ClienteViewModel } from 'src/app/cliente/models/cliente-view-model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(
    private modalServicer: NgbModal,
    private serviceCliente: ClienteService
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

  checkedCasado(index: number){
    const novoValor = !this.clientes[index].casado;
    this.clientes[index].casado = novoValor;

    const objValor = {casado : novoValor};
    const id = this.clientes[index].id;

    this.serviceCliente.editadarClienteParcial(id, objValor)
  }
////////////////////////////aqui fecha meu metodo para carregar o cliente 
  handleModalClienteForm(response){
    
  }
}
