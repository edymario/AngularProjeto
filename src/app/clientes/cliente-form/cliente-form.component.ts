import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/cliente/models/cliente';
import { ClienteService } from 'src/app/cliente/services/cliente.service';
import { DocumentReference } from '@angular/fire/firestore';

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

  ngOnInit() {
    this.clienteForm=  this.formBuilder.group({
        nome : ['', Validators.required],
        endereco : ['', Validators.required],
        casado : false
    })
  }

  salvarCliente(){
    if(this.clienteForm.invalid){
      return;
    }else{
      let cliente: Cliente = this.clienteForm.value;
      cliente.dataCad = new Date(); 
      this.clienteService.salvaCliente(cliente).then(response=> this.handleSuccessSave(response,cliente))
      .catch(err => console.error(err))
    }
  }
  handleSuccessSave(response:DocumentReference, cliente: Cliente){
      this.activeModal.dismiss({cliente :cliente, id: response.id, CreateMode:true });
  }

}
