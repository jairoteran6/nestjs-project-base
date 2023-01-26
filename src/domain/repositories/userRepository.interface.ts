import { User } from '../model/user';

export interface UserRepository {
  findAll(): Promise<User[]>;
}
