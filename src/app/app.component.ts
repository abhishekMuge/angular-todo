import { ITodo } from './Interface/ITodo';
import { Component } from '@angular/core';
import { TodoServiceService } from './Service/todo-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todos: ITodo[];
  public errorMsg: any;
  constructor(private _todoService: TodoServiceService) {
    this._todoService.getTodoList().subscribe(
      (data) => (this.todos = data),
      (error) => (this.errorMsg = error)
    );
  }
}
