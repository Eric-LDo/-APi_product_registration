import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';

@Module({
  imports: [],
  controllers: [UserController,ProductController],
  providers: [UserService, ProductService],
})
export class AppModule {}
