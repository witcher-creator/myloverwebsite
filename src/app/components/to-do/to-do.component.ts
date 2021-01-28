import { Component, OnInit } from '@angular/core';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { IToDo } from 'src/app/services/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  todoList: DocumentChangeAction<IToDo>[];

  constructor(private todoService: TodoService) { }

  getToDoList(): void {
    this.todoService.getTodos().subscribe((res) => {
      this.todoList = res || [];
    });
  }

  ngOnInit(): void {
    this.getToDoList();
  }

  changeStatus(data): void {
    this.todoService.updateTodo(data);
  }

  deleteToDo(data): void {
    this.todoService.deleteTodo(data);
  }
}
