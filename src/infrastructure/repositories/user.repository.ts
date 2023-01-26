import { Injectable } from '@nestjs/common';
import { User } from '../../domain/model/user';
import { UserRepository } from '../../domain/repositories/userRepository.interface';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class ExternalUserRepository implements UserRepository {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<User[]> {
    return await firstValueFrom(
      this.httpService
        .get('https://dummyapi.io/data/v1/user?limit=10', {
          headers: {
            'app-id': '63d285363d0f8795d5803bed',
          },
        })
        .pipe(map((response: AxiosResponse) => response.data.data)),
    );
  }
}
