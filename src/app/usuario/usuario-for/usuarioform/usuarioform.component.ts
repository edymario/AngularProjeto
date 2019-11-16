import { Usuario } from '../../model/usuario';

import { UsuarioService } from './../../usuario-service/usuario.service';
import { UsuarioViewModel } from './../../model/usuario-view-model';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DocumentReference } from '@angular/fire/firestore';
import { $ } from 'protractor';

@Component({
  selector: 'app-usuarioform',
  templateUrl: './usuarioform.component.html',
  styleUrls: ['./usuarioform.component.css']
})
export class UsuarioformComponent implements OnInit {
  usuarioForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public activeModel: NgbActiveModal,
    private  usuarioSevice: UsuarioService
  ) { }

  modoInsercao: boolean = true;
  usuario: UsuarioViewModel;

  ngOnInit() {
      this.usuarioForm =  this.formBuilder.group({
      nome : ['', Validators.required],
      usuario : ['', Validators.required],
      senha : ['', Validators.required],
      telefone : ['',  Validators.required],
      email : ['',  Validators.required]
    });
      if (! this.modoInsercao) {
        this.carregarTudo(this.usuario);
      }
  }

  carregarTudo(usuario) {
    this.usuarioForm.patchValue(usuario);
  }

  select: string;

  capturaSelect(select: string) {
    console.log(document.getElementById(this.usuario.perfil));
    console.log(select);
    this.select = select;
  }

  salvarUser() {
    if (this.usuarioForm.invalid) {
      return;
    }
    console.log(this.usuarioForm);
   /* if (this.modoInsercao) {
      let usuario: Usuario = this.usuarioForm.value;
      usuario.dataCad = new Date();

      this.usuarioSevice.salvaUser(usuario)
      .then(response=> this.handleSuccessSave(response, usuario))
      .catch(err => console.error(err));
    } else {
      let usuario: UsuarioViewModel = this.usuarioForm.value;
      usuario.id = this.usuario.id;
      this.usuarioSevice.editadarUser(usuario)
      .then(() => this.handleSuccessEdit(usuario))
      .catch(err => console.error(err));
    }*/
  }

  handleSuccessSave(response: DocumentReference, usuario: Usuario) {
      this.activeModel.dismiss({ usuario: usuario, id: response.id, modoInsercao: true });
  }

  handleSuccessEdit(usuario : UsuarioViewModel){
    this.activeModel.dismiss({usuario: usuario, id: usuario.id, modoInsercao: false });
  }
}
