import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ProductsService } from 'src/products/products.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ProductsService],
})
export class UsersModule {}
