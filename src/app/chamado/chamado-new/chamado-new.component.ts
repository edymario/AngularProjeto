import { ChamadoViewModel } from './../models/chamado-view-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChamadoService } from './../service/chamado.service';
import { Component, OnInit } from '@angular/core';
import { ChamadoModalComponent } from '../chamado-modal/chamado-modal.component';

@Component({
  selector: 'app-chamado-new',
  templateUrl: './chamado-new.component.html',
  styleUrls: ['./chamado-new.component.css']
})
export class ChamadoNewComponent implements OnInit {

  constructor(
    private modalServicer: NgbModal,
    private serviceChamado:ChamadoService,
    private modalChamado: NgbModal
    ) { }

    ngOnInit() {
      this.mostrarChamado();
    }
    chamados: ChamadoViewModel [] = []
    mostrarChamado(){
      this. serviceChamado.getChamado().subscribe(response =>
        {
          this.chamados = [];
          response.docs.forEach(value => {
            const data = value.data();
            const id = value.id;
            const chamado: ChamadoViewModel = {
              id: data.id,
              id_cliente: data.id_cliente,
              tecnico: data.tecnico,
              defeito: data.defeito,
              solucao: data.solucao,
              dataChamado: data.dataChamado,
              concluido: data.concluido
            }
            console.log(chamado)
            this.chamados.push(chamado);
          });
        });
    }

    editarClick(chamado: ChamadoViewModel) {
      alert("alert");
      const modal = this.modalServicer.open(ChamadoModalComponent);
      this.handleModalChamadoForm.bind(this),
      this.handleModalChamadoForm.bind(this);
      modal.result.then(
        this.handleModalChamadoForm.bind(this),
        this.handleModalChamadoForm.bind(this)
      );
      modal.componentInstance.modoInsercao = false;
      modal.componentInstance.chamado =  chamado;
    }

    checkedConcluido() {

    }

    handleModalChamadoForm(response) {
      if (response === Object(response)) {
        if (response.modoInsercao) {
          response.chamado.id = response.id;
          this.chamados.unshift(response.chamado);
         // this.mostrarCliente();
        } else {//se for falso  pega resposta da modal e atualiza para carregar as informações vai para modal-form
            let index = this.chamados.findIndex(value => value.id ==  response.id)
            this.chamados[index] = response.chamado;

        }
      }
    }
}

