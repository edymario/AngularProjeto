import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { ClienteViewModel } from '../models/cliente-view-model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private db : AngularFirestore
  ) { }

  private clienteColection = 'clientes';

  /////////////////////para consulta o banco de dados usando o firebase
  getCliente(): Observable<firebase.firestore.QuerySnapshot>{
  return this.db.collection<Cliente>(this.clienteColection, ref => ref.orderBy ('nome', 'asc')).get()
  }

  //todos os metodos para inserir algum valor no banco adiciona dessa forma

  salvaCliente(cliente : Cliente): Promise<DocumentReference>{
      return this.db.collection(this.clienteColection).add(cliente)
  }

  //Metodo para editar o cliente 
  editadarCliente(cliente : ClienteViewModel): Promise<void>{
    return this.db.collection(this.clienteColection).doc(cliente.id).update(cliente);
  }
  //metodo para editar apenas o campo especifico 
  editadarClienteParcial(id: string, obj: Object): Promise<void>{
    return this.db.collection(this.clienteColection).doc(id).update(obj);
  }

  //deletar o cliente especifico
  deletarCliente(id : string): Promise<void>{
    return this.db.collection(this.clienteColection).doc(id).delete();
  }

}
