import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';

@Injectable()
export class UserService {
  get() {
    return [
      {
        name: 'khalid',
      },
      {
        name: 'Masud',
      },
    ];
  }

  create(body: CreateUserDto) {
    return body;
  }

  update(body: UpdateUserDto, params) {
    return { body, params };
  }

  store(params) {
    return params;
  }

  delete(params) {
    return params;
  }
}
