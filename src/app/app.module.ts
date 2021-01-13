import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { TodoListComponent } from './Components/todo-list/todo-list.component';
import { NewTodoComponent } from './Components/new-todo/new-todo.component';

//services
import { TodoServiceService } from './Service/todo-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    NewTodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TodoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
