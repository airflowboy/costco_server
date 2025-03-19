import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { HealthSupplementsService } from './health-supplements.service';
import { HealthNutritionalSupplements } from './entities/health-supplement.entity';

@Controller('health-nutritional-supplements')
export class HealthSupplementsController {
  constructor(
    private readonly healthSupplementsService: HealthSupplementsService,
  ) {}

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<HealthNutritionalSupplements> {
    return this.healthSupplementsService.findOne(id);
  }

  @Get()
  async findAll(): Promise<HealthNutritionalSupplements[]> {
    return this.healthSupplementsService.findAll();
  }
}
