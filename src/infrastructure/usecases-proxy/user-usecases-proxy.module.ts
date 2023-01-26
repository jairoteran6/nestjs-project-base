import { DynamicModule, Module } from '@nestjs/common';
import { getUsersUseCases } from '../../usecases/user/getUsers.usecases';
import { EnvironmentConfigModule } from '../config/environment-config/environment-config.module';
import { ExceptionsModule } from '../exceptions/exceptions.module';
import { LoggerModule } from '../logger/logger.module';
import { RepositoriesModule } from '../repositories/repositories.module';
import { ExternalUserRepository } from '../repositories/user.repository';
import { UseCaseProxy } from './usecases-proxy';

@Module({
  imports: [
    LoggerModule,
    EnvironmentConfigModule,
    RepositoriesModule,
    ExceptionsModule,
  ],
})
export class UserUsecasesProxyModule {
  static GET_USERS_USECASES_PROXY = 'getUsersUsecasesProxy';

  static register(): DynamicModule {
    return {
      module: UserUsecasesProxyModule,
      providers: [
        {
          inject: [ExternalUserRepository],
          provide: UserUsecasesProxyModule.GET_USERS_USECASES_PROXY,
          useFactory: (externalUserRepository: ExternalUserRepository) =>
            new UseCaseProxy(new getUsersUseCases(externalUserRepository)),
        },
      ],
      exports: [UserUsecasesProxyModule.GET_USERS_USECASES_PROXY],
    };
  }
}
