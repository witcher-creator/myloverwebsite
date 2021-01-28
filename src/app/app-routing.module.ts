import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { AddToDoComponent } from './components/add-to-do/add-to-do.component';
import { ToDoComponent } from './components/to-do/to-do.component';

const routes: Routes = [
  {path: 'signin', component: AccountComponent},
  {path: 'todo', component: ToDoComponent},
  {path: 'todo/:id', component: AddToDoComponent},
  {path: 'addToDo', component: AddToDoComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
