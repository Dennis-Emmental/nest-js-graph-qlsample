import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { Todo, NewTodoInput } from './todo.model';
import { PubSub } from 'apollo-server-express'
import { TodoService } from './todo.service';

const pubSub = new PubSub();

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {
  }

  @Query(returns => [Todo])
  async list() {
    return this.todoService.list();
  }

  @Mutation(returns => Todo)
  async addToto(
    @Args('newTodo') newTodo: NewTodoInput
  ): Promise<Todo> {
    const todo = this.todoService.addTodo(newTodo.title);

    pubSub.publish('todoAdded', { todoAdded: todo });

    return todo;
  }

  @Subscription(returns => Todo)
  async todoAdded() {
    return pubSub.asyncIterator('todoAdded');
  }
}