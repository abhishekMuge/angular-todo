import { ITodo } from './../../Interface/ITodo';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoServiceService } from '../../Service/todo-service.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
})
export class NewTodoComponent implements OnInit {
  @Input() public todos: any[] = [];

  myForm = new FormGroup({
    name: new FormControl(''),
  });

  public name = new FormControl('');
  constructor(private _todoService: TodoServiceService) {}

  ngOnInit(): void {}

  createTodo(): void {
    console.log(this.name.value);
    const newTodo = {
      id: 10,
      name: this.myForm.value.name,
      completed: false,
    };
    this._todoService.createTodo(newTodo).subscribe((data) => {
      this.todos.push(data);
      this.myForm.setValue({ name: '' });
    });
  }
}
