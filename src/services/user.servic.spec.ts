import { Test, TestingModule } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import { UserService } from './user.service';
import { CreateUser, DeleteUser, LoginUser, UpdateUser } from 'src/dtos/user';

describe('UserService', () => {
  let service: UserService;
  let prisma: PrismaClient;
  let idtest: string
  beforeAll(async () => {
    await prisma.user.create({
      data: {
        email: 'test@example.com',
        name: 'Test User',
        password: 'password',
      },
    })
  });
  
  afterAll(async () => {
    await prisma.user.deleteMany({});
    await prisma.product.deleteMany({});
  });
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaClient],
    }).compile();

    service = module.get<UserService>(UserService);
    prisma = module.get<PrismaClient>(PrismaClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const createUserDto: CreateUser = { name: 'Test', email: 'test@example.com', password: 'password' };
    jest.spyOn(prisma.user, 'create').mockResolvedValue(createUserDto as any);
    const result = await service.createUser(createUserDto);
    expect(result).toEqual(createUserDto);
  });

  // Teste para o método updateUser
  it('should update a user', async () => {
    const updateUserDto: UpdateUser = { id: '1', name: 'Updated Test', email: 'updated@example.com', password: 'newpassword' };
    jest.spyOn(prisma.user, 'update').mockResolvedValue(updateUserDto as any);
    const result = await service.updateUser(updateUserDto);
    expect(result).toEqual(updateUserDto);
  });

  // Teste para o método deleteUser
  it('should delete a user', async () => {
    const deleteUserDto: DeleteUser = { id: '1' };
    jest.spyOn(prisma.user, 'delete').mockResolvedValue(deleteUserDto as any);
    const result = await service.deleteUser(deleteUserDto);
    expect(result).toEqual(deleteUserDto);
  });

  // Teste para o método loginUser
  it('should login a user', async () => {
    const loginUserDto: LoginUser = { email: 'test@example.com', password: 'password' };
    const user = { id: '1', name: 'Test', email: 'test@example.com', password: 'password' };
    jest.spyOn(prisma.user, 'findUnique').mockResolvedValue(user as any);
    const result = await service.login(loginUserDto);
    expect(result).toEqual(user);
  });
});