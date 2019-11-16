import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/cliente/models/cliente';
import { ClienteService } from 'src/app/cliente/services/cliente.service';
import { DocumentReference } from '@angular/fire/firestore';
import { ClienteViewModel } from 'src/app/cliente/models/cliente-view-model';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  clienteForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private clienteService : ClienteService
    ) { }

    modoInsercao : boolean = true;
    cliente: ClienteViewModel;

  ngOnInit() {
    this.clienteForm=  this.formBuilder.group({
        nome : ['', Validators.required],
        endereco : ['', Validators.required],
        company : ['', Validators.required],
        cnpj : ['', Validators.required],
        telefone : ['',  Validators.required],
        email : ['',  Validators.required],
        casado : false
    })
    //aqui verifica se for falso ele carrega as informaçoes e passa para metodo carregartudp
    if(!this.modoInsercao){
      this.carregarTudo(this.cliente);
    }
  }
//aqui set os valores pelo petchvalue
  carregarTudo(cliente){
      this.clienteForm.patchValue(cliente);
  }

  /*salvarCliente(){
    if(this.clienteForm.invalid){
      return;
    }else{
      let cliente: Cliente = this.clienteForm.value;
      cliente.dataCad = new Date();
      this.clienteService.salvaCliente(cliente).then(response=> this.handleSuccessSave(response,cliente))
      .catch(err => console.error(err))
    }
  }*/


  salvarCliente(){
      if(this.clienteForm.invalid){
        return;
      }

      if(this.modoInsercao){
        let cliente: Cliente = this.clienteForm.value;
        cliente.dataCad = new Date();
        cliente.dataMod = new Date();

        this.clienteService.salvaCliente(cliente)
        .then(response=> this.handleSuccessSave(response,cliente))
        .catch(err => console.error(err))
      }else{
        let cliente: ClienteViewModel = this.clienteForm.value;
        cliente.id = this.cliente.id;
        cliente.dataMod = new Date();
        this.clienteService.editadarCliente(cliente)
        .then(()=> this.handleSuccessEdit(cliente))
        .catch(err => console.error(err))
      }
    }
handleSuccessSave(response:DocumentReference, cliente: Cliente){
      this.activeModal.dismiss({cliente :cliente, id: response.id, modoInsercao:true });
  }

  handleSuccessEdit(cliente : ClienteViewModel){
    this.activeModal.dismiss({cliente :cliente, id: cliente.id, modoInsercao:false });
 }
}
