import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoAddComponent } from "./todo-app/todo-add/todo-add.component";
import { TodoFooterComponent } from "./todo-app/todo-footer/todo-footer.component";
import { TodoItemComponent } from "./todo-app/todo-item/todo-item.component";
import { TodoListComponent } from "./todo-app/todo-list/todo-list.component";
import { TodoAppModule } from './todo-app/todo-app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoAppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reduxAngular';
}
