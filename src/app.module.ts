import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import * as path from 'path';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TodoModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
      installSubscriptionHandlers: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
