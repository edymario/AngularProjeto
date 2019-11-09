import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Chamado } from '../models/chamado';
import { ChamadoViewModel } from '../models/chamado-view-model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  constructor(
    private db : AngularFirestore
    
   ) { }

  private chamadoColection = 'chamado';
   /////////////////////para consulta o banco de dados usando o firebase
   getChamado(): Observable<firebase.firestore.QuerySnapshot>{
    return this.db.collection<Chamado>(this.chamadoColection, ref => ref.orderBy ('dataChamado', 'desc')).get()
    }
   
    salvarChamado(chamado : Chamado): Promise<DocumentReference>{
      alert("Testes");
      return this.db.collection(this.chamadoColection).add(chamado)
    }

  //Metodo para editar o chamado 
  editadarChamado(chamado : ChamadoViewModel): Promise<void>{
    return this.db.collection(this.chamadoColection).doc(chamado.id).update(chamado);
  }

  //metodo para editar apenas o campo especifico 
  editarChamadoParcial(id: string, obj : Object): Promise<void>{
    return this.db.collection(this.chamadoColection).doc(id).update(obj);
  }

   //deletar o chamado especifico
   deletarChamado(id : string): Promise<void>{
    return this.db.collection(this.chamadoColection).doc(id).delete();
  }

}
