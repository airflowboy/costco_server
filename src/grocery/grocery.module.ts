import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroceryController } from './grocery.controller';
import { GroceryService } from './grocery.service';
import { Grocery } from './entities/grocery.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Grocery])],
  controllers: [GroceryController],
  providers: [GroceryService],
})
export class GroceryModule {}
