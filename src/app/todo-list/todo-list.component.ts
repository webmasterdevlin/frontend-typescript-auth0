import { v4 } from 'uuid';
import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  todoForm: FormGroup;

  constructor(private fb: FormBuilder, private todoService: TodoService) {}

  ngOnInit() {
    this.selectAllTodos();
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
    });
  }

  selectAllTodos() {
    this.todoService.getTodos().subscribe(data => (this.todos = data));
  }

  add() {
    if (!this.todoForm.value.title) return;

    const newTodo = this.todoForm.value as Todo;
    newTodo.isDone = false;
    // newTodo.id = v4();
    this.todoService
      .postTodo(newTodo)
      .subscribe(data => (this.todos = [...this.todos, data]));
  }

  update(updatedTodo: Todo) {
    const index = this.todos.findIndex(t => t.id === updatedTodo.id);
    updatedTodo.isDone = !updatedTodo.isDone;

    this.todoService
      .putTodo(updatedTodo)
      .subscribe(() => (this.todos[index].isDone = updatedTodo.isDone));
  }
  remove(todo: Todo) {
    const index = this.todos.findIndex(t => t.id === todo.id);

    this.todoService.deleteTodo(todo.id).subscribe(data => {
      this.todos.splice(index, 1);
    });
  }
}
