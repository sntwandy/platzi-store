import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return {
      message: 'Users',
    };
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return {
      message: `User: ${id}`,
    };
  }

  @Post()
  createUser(@Body() payload: any) {
    return {
      message: 'User created',
      payload,
    };
  }
}
