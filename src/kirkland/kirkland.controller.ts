import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { KirklandService } from './kirkland.service';
import { Kirkland } from './entities/kirkland.entity';

@Controller('kirkland')
export class KirklandController {
  constructor(private readonly kirklandService: KirklandService) {}

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Kirkland> {
    return this.kirklandService.findOne(id);
  }

  @Get()
  async findAll(): Promise<Kirkland[]> {
    return this.kirklandService.findAll();
  }
}
