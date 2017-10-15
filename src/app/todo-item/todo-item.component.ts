import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from "@angular/core";
import {TodoItem} from "../todo-item.model";

@Component({
  selector: 'app-todo-item',
  templateUrl:'./todo-item.component.html',
  styleUrls: ['todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todoItem: TodoItem;
  @Output() newTitle: EventEmitter<string> = new EventEmitter();

  setTodoText(newTitle: string):void {
    this.todoItem.title = newTitle;
    this.changeTitle(newTitle);
  }

  changeTitle(newTitle: string): void {
    this.newTitle.emit(newTitle);
  }
}
