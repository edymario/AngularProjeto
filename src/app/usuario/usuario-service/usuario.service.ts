import { UsuarioViewModel } from './../model/usuario-view-model';
import { Observable } from 'rxjs';
import { Usuario } from './../model/usuario';
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private db: AngularFirestore
    ) { }
    private usuarioColection = 'usuario';

    /*para consulta o banco de dados usando o firebase*/
  getUSer(): Observable<firebase.firestore.QuerySnapshot>{
    return this.db.collection<Usuario>(this.usuarioColection, ref => ref.orderBy ('nome', 'asc')).get()
  }

 /*todos os metodos para inserir algum valor no banco adiciona dessa forma*/

 salvaUser(usuario: Usuario): Promise<DocumentReference>{
    return this.db.collection(this.usuarioColection).add(usuario);
  }

//Metodo para editar o cliente
editadarUser(usuario: UsuarioViewModel): Promise<void>{
  return this.db.collection(this.usuarioColection).doc(usuario.id).update(usuario);
}
//metodo para editar apenas o campo especifico
editadarUserParcial(id: string, obj: Object): Promise<void>{
  return this.db.collection(this.usuarioColection).doc(id).update(obj);
}

//deletar o cliente especifico
deletarUser(id: string): Promise<void>{
  return this.db.collection(this.usuarioColection).doc(id).delete();
}


}
