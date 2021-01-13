import { ITodo } from './../../Interface/ITodo';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoServiceService } from '../../Service/todo-service.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
})
export class NewTodoComponent implements OnInit {
  @Input() public todos: any[] = [];
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _todoService: TodoServiceService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      item: '',
    });
  }

  createTodo(): void {
    const newTodo = {
      id: 10,
      name: this.myForm.value.item,
      completed: false,
    };
    this._todoService.createTodo(newTodo).subscribe((data) => {
      this.todos.push(data);
    });
  }
}
