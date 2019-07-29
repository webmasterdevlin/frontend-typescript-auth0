import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 } from 'uuid';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  firstName = 'Devln';
  lastName = 'Duldulao';
  todos: Todo[] = [];
  todoForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
    });
  }

  add() {
    if (!this.todoForm.value.title) return;

    const newTodo: Todo = this.todoForm.value as Todo;
    newTodo.isDone = false;
    newTodo.id = v4();
    this.todos = [...this.todos, newTodo];
    this.todoForm.reset();
  }

  remove(todo: Todo) {
    const index = this.todos.findIndex(t => t.id === todo.id);
    this.todos.splice(index, 1);
  }

  update(todo: Todo) {
    const index = this.todos.findIndex(t => t.id === todo.id);
    this.todos[index].isDone = !todo.isDone;
  }
}
