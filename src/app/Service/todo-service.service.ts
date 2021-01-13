import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodo } from '../Interface/ITodo';
import { retry } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  constructor(private http: HttpClient) {}
  getTodoList(): Observable<ITodo[]> {
    return this.http
      .get<ITodo[]>(`${environment.baseUrl}/todos`)
      .pipe(retry(3), catchError(this.errorHandler));
  }
  updateTodo(todo: ITodo): Observable<ITodo> {
    const todoId = todo.id;
    return this.http
      .put<ITodo>(`${environment.baseUrl}/todos/${todoId}`, todo)
      .pipe(catchError(this.errorHandler));
  }

  createTodo(todo: ITodo): Observable<ITodo> {
    return this.http
      .post<ITodo>(`${environment.baseUrl}/todos`, todo)
      .pipe(retry(2), catchError(this.errorHandler));
  }

  deleteTodo(todoId: number): Observable<ITodo> {
    return this.http
      .delete<any>(`${environment.baseUrl}/todos/${todoId}`)
      .pipe(retry(2), catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.statusText || 'server error');
  }
}
