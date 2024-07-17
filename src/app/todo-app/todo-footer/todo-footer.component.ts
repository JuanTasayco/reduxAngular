import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoItem } from '../models/todo-item';
import * as actions from '../redux/todo.actions';
@Component({
  selector: 'app-todo-footer',
  standalone: false,
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.scss'
})
export class TodoFooterComponent implements OnInit {
  constructor(private store: Store<{ todo: TodoItem[] }>) { }
  todos: TodoItem[] = [];
  ngOnInit(): void {
    this.store.subscribe(store => {
      this.todos = store.todo;
    })
  }
}
