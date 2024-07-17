import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoItem } from '../models/todo-item';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as actions from '../redux/todo.actions';
@Component({
  selector: 'app-todo-add',
  standalone: false,
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss'
})
export class TodoAddComponent implements OnInit {
  formBuilder = inject(FormBuilder);

  constructor(private store: Store<{ todo: TodoItem[] }>) { }
  ngOnInit(): void {
  }

  addFormTodo: FormGroup = this.formBuilder.group({
    taskUser: ['', Validators.required]
  })

  agregar(event: KeyboardEvent) {
    const valueText = this.addFormTodo.get('taskUser')?.value;
    if (event.keyCode === 13 && this.addFormTodo.get('taskUser')?.valid) {
      this.store.dispatch(actions.addItem({ texto: valueText }))
      this.addFormTodo.get('taskUser')?.reset();
    }
  }
}
