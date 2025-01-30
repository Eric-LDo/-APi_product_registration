import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUser, DeleteUser, LoginUser, UpdateUser } from 'src/dtos/user';

@Injectable()
export class UserService {
  private readonly prisma = new PrismaClient();

  async createUser({name, email, password}:CreateUser) {
    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    })
    .then((e) => {
      console.log(e);
    })
    .catch((err) => {
      console.log(err);
    });
    return user;
  }

  async updateUser({id,name, email, password}:UpdateUser) {
    const user = await this.prisma.user.update(
      {
        where: {
          id: id,
        },
        data: {
          name,
          email,
          password,
        },
      }
    ).then((e) => {
      console.log(e);
    })
    .catch((err) => {
      console.log(err);
    });
    return user;
  }
  async deleteUser({id}: DeleteUser) {
    const user = await this.prisma.user.delete({
      where: {
        id: id,
      },
    }).then((e) => {
      console.log(e);
    })
    .catch((err) => {
      console.log(err);
    });
    return user;
  }

  async login({email, password}: LoginUser) {
    const user = await this.prisma.user.findFirst({
      where: {
        email: email,
        password: password,
      },
    }).then((e) => {
      console.log(e);
    })
    .catch((err) => {
      console.log(err);
    });
    return user;
  }
}
