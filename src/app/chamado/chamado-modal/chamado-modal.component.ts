import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Chamado } from '../models/chamado';
import { ChamadoViewModel } from '../models/chamado-view-model';
import { ChamadoService } from '../service/chamado.service';
import { DocumentReference } from '@angular/fire/firestore';


@Component({
  selector: 'app-chamado-modal',
  templateUrl: './chamado-modal.component.html',
  styleUrls: ['./chamado-modal.component.css']
})

export class ChamadoModalComponent implements OnInit {
  chamadoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private chamadoService : ChamadoService
    ){ }

  ngOnInit() {
      this.chamadoForm = this.formBuilder.group({

        tipo: ['', Validators.required],
        tec: ['', Validators.required],
        defeito: ['', Validators.required],
        concluido: false
      });
  }


  modoInsercao : boolean = true;
  chamado: ChamadoViewModel;
  indexCli: string;
  clienteId:number;


  salvarChamado(){
    if(this.chamadoForm.invalid){
      return;
    }

    if(this.modoInsercao){
      let chamado: Chamado = this.chamadoForm.value;
      //chamado.dataCad = new Date();
      chamado.dataChamado = new Date();
      chamado.id_cliente = this.clienteId;
      chamado.cliente = this.indexCli;

      this.chamadoService.salvarChamado(chamado)
      .then(response => this.handleSuccessSave(response, chamado))
      .catch(err => console.error(err));
    }else{

      let chamado: ChamadoViewModel = this.chamadoForm.value;
      chamado.id = this.chamado.id;
      this.chamadoService.editadarChamado(chamado)
      .then(()=> this.handleSuccessEdit(chamado))
      .catch(err => console.error(err))
    }
  }
 /* salvarChamado(){
    console.log("teste de chamada = " + this.indexCli);
    if(this.chamadoForm.invalid){
      return;
    }else{
      let chamado: Chamado = this.chamadoForm.value;
      chamado.dataChamado = new Date();
      chamado.id_cliente = this.clienteId;
      chamado.cliente = this.indexCli;
      this.chamadoService.salvarChamado(chamado).then(response=> this.handleSuccessSave(response,chamado))
      .catch(err => console.error(err))
    }
  }*/

  carregarTudo(chamado){
    this.chamadoForm.patchValue(chamado);
}
  /*salvarChamado(clienteId : string, index: number{
    alert("Chamada de metodo")

    //let chamado: Chamado = this.chamadoForm.value;
    //console.log(id, " estou aqui ");
    if(this.chamadoForm.invalid){
      return;
    }

    if(this.modoInsercao){
      alert("estou aqui")
      let chamado: Chamado = this.chamadoForm.value;
      chamado.dataChamado = new Date();

      this.chamadoService.salvaChamado(chamado)
      .then(response=> this.handleSuccessSave(response,chamado))
      .catch(err => console.error(err))
    }else{
      let chamado: ChamadoViewModel = this.chamadoForm.value;
      chamado.id = this.chamado.id;
      chamado.dataChamado = new Date();
      this.chamadoService.editadarChamado(chamado)
      .then(()=> this.handleSuccessEdit(chamado))
      .catch(err => console.error(err))
    }
  }*/
  handleSuccessSave(response:DocumentReference, chamado: Chamado){
    //, modoInsercao:true
    this.activeModal.dismiss({chamado :chamado, id: response.id, CreateModel:true});
}

  handleSuccessEdit(chamado : ChamadoViewModel){
    //  , modoInsercao:false
    this.activeModal.dismiss({chamado :chamado, id: chamado.id });
  }
}
