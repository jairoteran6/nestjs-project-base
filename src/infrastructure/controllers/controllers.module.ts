import { Module } from '@nestjs/common';
import { UsecasesProxyModule } from '../usecases-proxy/usecases-proxy.module';
import { TestController } from './test/test.cotroller';
import { TodoController } from './todo/todo.controller';

@Module({
  imports: [UsecasesProxyModule.register()],
  controllers: [TodoController,TestController],
})
export class ControllersModule {}