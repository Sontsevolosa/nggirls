import { Injectable } from '@angular/core';
import {TodoItem} from "./todo-item.model";

@Injectable()
export class TodoService {
  todoList: TodoItem[] = [
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
  ];
  constructor() { }

  getTodoList(newTodo?: TodoItem): TodoItem[] {
    if (newTodo) {
      this.todoList.push(newTodo);
    }
      return this.todoList;
  }

  addNewTodo(newTitle: string): void {
    this.getTodoList(new TodoItem(newTitle));
  }
}
