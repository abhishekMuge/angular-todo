import { ITodo } from './../../Interface/ITodo';
import { Component, OnInit, Input } from '@angular/core';
import { TodoServiceService } from '../../Service/todo-service.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() public todos: any[] = [];
  public errorMsg: any;
  constructor(private _todoService: TodoServiceService) {}

  ngOnInit(): void {}

  updateTodo(todo: ITodo) {
    const newTodo = {
      name: todo.name,
      id: todo.id,
      completed: !todo.completed,
    };
    this._todoService.updateTodo(newTodo).subscribe(
      (data) => {
        return true;
      },
      (error) => (this.errorMsg = error)
    );
  }

  deleteTodo(todo: ITodo) {
    this._todoService.deleteTodo(todo.id).subscribe((data) => {
      const newTodos = this.todos.filter((todoItem) => todoItem.id !== data.id);
      this.todos = newTodos;
    });
  }
}
