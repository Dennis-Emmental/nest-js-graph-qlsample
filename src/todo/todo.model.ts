import { ObjectType, Field, InputType, Int } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(type => Int)
  id: number;

  @Field(type => String)
  title: string;
}

@InputType()
export class NewTodoInput {
  @Field(type => String)
  title: string;
}
