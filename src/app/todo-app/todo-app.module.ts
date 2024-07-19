import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoAppRoutingModule } from './todo-app-routing.module';
import { provideStore, StoreModule } from '@ngrx/store';
import { todoReducer } from './redux/todo.reducer';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoPageComponent } from './todo-page/todo-page.component';


@NgModule({
  declarations: [
    TodoAddComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoPageComponent
  ],
  imports: [
    CommonModule,
    TodoAppRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    TodoAddComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoPageComponent
  ],
  providers: [provideStore({ todo: todoReducer })]
})
export class TodoAppModule { }
