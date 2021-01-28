import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IToDo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private firestore: AngularFirestore) { }

  createNewToDo(data: IToDo): Promise<any> {
    return new Promise<any>((resolve, rejects) => {
      this.firestore
        .collection('todo')
        .add(JSON.parse(JSON.stringify(data))) // convert to object json
        .then(res => {}, err => rejects(err));
    });
  }

  getTodos(): Observable<DocumentChangeAction<IToDo>[]> {
    return this.firestore.collection<IToDo>('todo').snapshotChanges();
  }

  updateTodo(data: DocumentChangeAction<IToDo>) {
    return this.firestore.collection('todo')
      .doc(data.payload.doc.id)
      .set({status: !data.payload.doc.data().status}, {merge: true});
  }

  deleteTodo(data: DocumentChangeAction<IToDo>) {
    return this.firestore.collection('todo')
      .doc(data.payload.doc.id)
      .delete();
  }
}
