/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUser, DeleteUser, LoginUser, UpdateUser } from 'src/dtos/user';



@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('create')
  createUser(@Body() Body: CreateUser) {
    return this.userService.createUser(Body);
  }

  @Put()
  updateUser(@Body() body: UpdateUser) {
    return this.userService.updateUser(body);
  }

  @Post()
  login(@Body() body : LoginUser){
    return this.userService.login(body);
  }
  
  @Delete('/:id')
  deleteUser(@Param() body: DeleteUser){
    return this.userService.deleteUser(body);
  }
}


