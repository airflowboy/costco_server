import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { GroceryService } from './grocery.service';
import { Grocery } from './entities/grocery.entity';

@Controller('grocery')
export class GroceryController {
  constructor(private readonly groceryService: GroceryService) {}

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Grocery> {
    return this.groceryService.findOne(id);
  }

  @Get()
  async findAll(): Promise<Grocery[]> {
    return this.groceryService.findAll();
  }
}
