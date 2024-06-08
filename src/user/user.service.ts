import { Injectable } from '@nestjs/common';
import { CreateUserDto } from "./dto/user-create.dto";

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

  update(req, params) {
    return { body: req.body, params };
  }

  getUser(params) {
    return params;
  }

  delete(params) {
    return params;
  }
}
