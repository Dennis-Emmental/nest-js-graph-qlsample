import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  private todoList: Todo[] = [];

  list() {
    return this.todoList;
  }

  addTodo(title: string) {
    const todo = {
      id: this.todoList.length,
      title: title
    }

    this.todoList.push(todo);

    return todo;
  }
}