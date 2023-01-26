import { Module } from '@nestjs/common';
import { UsecasesProxyModule } from '../usecases-proxy/usecases-proxy.module';
import { UserUsecasesProxyModule } from '../usecases-proxy/user-usecases-proxy.module';
import { TestController } from './test/test.cotroller';
import { TodoController } from './todo/todo.controller';
import { UserController } from './user/user.controller';

@Module({
  imports: [UsecasesProxyModule.register(), UserUsecasesProxyModule.register()],
  controllers: [TodoController, TestController, UserController],
})
export class ControllersModule {}
