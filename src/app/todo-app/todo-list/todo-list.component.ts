import { Component } from '@angular/core';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { TodoItem } from '../models/todo-item';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  todos: TodoItem[] = []

  constructor(private store: Store<{ todo: TodoItem[] }>) { }

  ngOnInit(): void {
    this.store.subscribe((newStateTodo) => this.todos = newStateTodo.todo)
  }
}
