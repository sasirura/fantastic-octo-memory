import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    try {
      return this.userService.create(createUserDto);
    } catch (error) {
      throw new BadRequestException('User already exists');
    }
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    console.log(email);
    try {
      return this.userService.findOne(email);
    } catch (error) {
      throw new BadRequestException('User not found');
    }
  }
}
