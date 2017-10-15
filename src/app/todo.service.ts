import { Injectable } from '@angular/core';
import {TodoItem} from "./todo-item.model";

@Injectable()
export class TodoService {

  constructor() { }

  getTodoList(): TodoItem[] {
    return [
      new TodoItem('Service'),
      new TodoItem('Service'),
      new TodoItem('Service'),
      new TodoItem('Service'),
      new TodoItem('Service'),
      new TodoItem('Service'),
      new TodoItem('Service'),
      new TodoItem('Service'),
      new TodoItem('Service'),
      new TodoItem('Service'),
      new TodoItem('Service')
    ]
  }

}
