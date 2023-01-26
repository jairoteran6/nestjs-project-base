import { Controller, Get, Inject } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UseCaseProxy } from '../../usecases-proxy/usecases-proxy';
import { UserUsecasesProxyModule } from '../../usecases-proxy/user-usecases-proxy.module';
import { UserPresenter } from './user.presenter';
import { ApiResponseType } from '../../common/swagger/response.decorator';
import { getUsersUseCases } from '../../../usecases/user/getUsers.usecases';

@Controller('user')
@ApiTags('user')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(UserPresenter)
export class UserController {
  constructor(
    @Inject(UserUsecasesProxyModule.GET_USERS_USECASES_PROXY)
    private readonly getAllUsecaseProxy: UseCaseProxy<getUsersUseCases>,
  ) {}

  @Get('users')
  @ApiResponseType(UserPresenter, true)
  async getUsers() {
    return await (
      await this.getAllUsecaseProxy.getInstance().execute()
    ).map((user) => new UserPresenter(user));
  }
}
