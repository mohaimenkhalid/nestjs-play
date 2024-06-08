import {
  Controller,
  Get,
  Post,
  Req,
  Request,
  Patch,
  Param,
  Delete,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user-create.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUsers() {
    return this.userService.get();
  }

  @Post()
  store(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch('/:userId')
  update(@Req() req: Request, @Param() params: { userId: number }) {
    return this.userService.update(req, params);
  }

  @Get('/:userId')
  getUser(@Param() params: { userId: number }) {
    return this.userService.getUser(params);
  }

  @Delete('/:userId')
  deleteUser(@Param() params: { userId: number }) {
    return this.userService.delete(params);
  }
}
