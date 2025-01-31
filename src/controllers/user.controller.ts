/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Param, Post, Put, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from '../services/user.service';
import { CreateUser, DeleteUser, LoginUser, UpdateUser } from 'src/dtos/user';



@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body() body: CreateUser, @Res() res: Response) {
    try {
      const user = await this.userService.createUser(body);
      return res.status(HttpStatus.CREATED).json(user);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }

  @Put()
  async updateUser(@Body() body: UpdateUser, @Res() res: Response) {
    try {
      const user = await this.userService.updateUser(body);
      return res.status(HttpStatus.OK).json(user);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }

  @Post('/login')
  async login(@Body() body: LoginUser, @Res() res: Response) {
    try {
      const user = await this.userService.login(body);
      return res.status(HttpStatus.OK).json(user);
    } catch (error) {
      return res.status(HttpStatus.UNAUTHORIZED).json({ message: error.message });
    }
  }
  
  @Delete('/:id')
  deleteUser(@Param() body: DeleteUser){
    return this.userService.deleteUser(body);
  }
}


