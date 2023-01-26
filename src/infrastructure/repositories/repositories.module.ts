import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';
import { Todo } from '../entities/todo.entity';
import { DatabaseTodoRepository } from './todo.repository';
import { ExternalUserRepository } from './user.repository';

@Module({
  imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([Todo]), HttpModule],
  providers: [DatabaseTodoRepository, ExternalUserRepository],
  exports: [DatabaseTodoRepository, ExternalUserRepository],
})
export class RepositoriesModule {}
