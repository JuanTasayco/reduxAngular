import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../models/todo-item';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as actions from '../redux/todo.actions';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent implements OnInit {
  @Input('todo') todo !: any;

  todoForm: FormGroup = this.formBuilder.group({
    taskEdit: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder, private store: Store<{ todo: TodoItem[] }>) { }

  ngOnInit(): void {
    this.todoForm.get('taskEdit')?.setValue(this.todo.contentText);
  }

  editando: boolean = false;

  changeToEditMode() { this.editando = !this.editando; }

  sendEdit() {
    if (this.todoForm.get('taskEdit')?.value === this.todo.contentText) return;

    if (this.todoForm.get('taskEdit')?.valid) {
      const newText = this.todoForm.get('taskEdit')?.value;
      this.store.dispatch(actions.editItem({ id: this.todo.id, texto: newText }));
      this.editando = false;
    }
  }

  completeTask() {
    this.store.dispatch(actions.toggle({ id: this.todo.id }))
  }

  deleteTodo() {
    this.store.dispatch(actions.deleteItem({ id: this.todo.id }));
  }

  terminarEdicion() {
    this.editando = !this.editando;
  }
}
