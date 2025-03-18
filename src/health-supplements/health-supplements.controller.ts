import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { HealthSupplementsService } from './health-supplements.service';
import { HealthSupplement } from './entities/health-supplement.entity';

@Controller('health-supplements')
export class HealthSupplementsController {
  constructor(
    private readonly healthSupplementsService: HealthSupplementsService,
  ) {}

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<HealthSupplement> {
    return this.healthSupplementsService.findOne(id);
  }

  @Get()
  async findAll(): Promise<HealthSupplement[]> {
    return this.healthSupplementsService.findAll();
  }
}
