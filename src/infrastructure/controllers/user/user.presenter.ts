import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../../domain/model/user';

export class UserPresenter {
  @ApiProperty()
  id: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  picture: string;

  constructor(user: User) {
    this.id = user.id;
    this.title = user.title;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.picture = user.picture;
  }
}
