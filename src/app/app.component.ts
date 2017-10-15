import {Component, EventEmitter, Output} from '@angular/core';
import { TodoItem } from "./todo-item.model";
import {TodoService} from "./todo.service";

@Component({
  selector: 'app-root',
  template: `
  <app-todo-item *ngFor="let item of todoItems" [todoItem]="item" (newTitle)="addItem($event)"></app-todo-item>
  `,
  styles: [`div {color: red}`]
})
export class AppComponent {
  @Output() newTitle: EventEmitter<TodoItem> = new EventEmitter();
  todoItems: TodoItem[] = [];

  constructor(private toDoService: TodoService) {
    this.getTodoList();
  }

  addItem(newTitle: string): void {
    console.log(newTitle);
  }

  getTodoList(): void {
    this.todoItems = this.toDoService.getTodoList();
  }
}
