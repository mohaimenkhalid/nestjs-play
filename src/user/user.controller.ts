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
import { UpdateUserDto } from "./dto/user-update.dto";

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
  update(@Body() updateUserDto: UpdateUserDto, @Param() params: { userId: number }) {
    return this.userService.update(updateUserDto, params);
  }

  @Get('/:userId')
  getUser(@Param() params: { userId: number }) {
    return this.userService.store(params);
  }

  @Delete('/:userId')
  deleteUser(@Param() params: { userId: number }) {
    return this.userService.delete(params);
  }
}
