import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoItem } from '../models/todo-item';
import * as actions from '../redux/todo.actions';
@Component({
  selector: 'app-todo-page',
  standalone: false,
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss'
})
export class TodoPageComponent {
  constructor(private store: Store<{ todo: TodoItem[] }>) { }

  allIsComplete: boolean = false;
  toggleAll() {
    this.allIsComplete = !this.allIsComplete;
    this.store.dispatch(actions.toggleAll({ estado: this.allIsComplete }))
  }
}
