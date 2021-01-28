import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IToDo, ToDo } from 'src/app/services/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss']
})
export class AddToDoComponent implements OnInit {

  model: IToDo = new ToDo('', '', false, '');

  constructor(
    private todoService: TodoService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.todoService.createNewToDo(this.model).then(res => {
      console.log('complete');
      this.goBack();
    }).catch((error) => {
      console.log(error);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
