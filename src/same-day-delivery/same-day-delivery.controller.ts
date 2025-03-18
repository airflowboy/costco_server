import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { SameDayDeliveryService } from './same-day-delivery.service';
import { SameDayDelivery } from './entities/same-day-delivery.entity';

@Controller('same-day-delivery')
export class SameDayDeliveryController {
  constructor(
    private readonly sameDayDeliveryService: SameDayDeliveryService,
  ) {}

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<SameDayDelivery> {
    return this.sameDayDeliveryService.findOne(id);
  }

  @Get()
  async findAll(): Promise<SameDayDelivery[]> {
    return this.sameDayDeliveryService.findAll();
  }
}
