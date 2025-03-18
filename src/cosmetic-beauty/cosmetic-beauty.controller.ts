import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CosmeticBeautyService } from './cosmetic-beauty.service';
import { CosmeticBeauty } from './entities/cosmetic-beauty.entity';

@Controller('cosmetic-beauty')
export class CosmeticBeautyController {
  constructor(private readonly cosmeticBeautyService: CosmeticBeautyService) {}

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CosmeticBeauty> {
    return this.cosmeticBeautyService.findOne(id);
  }

  @Get()
  async findAll(): Promise<CosmeticBeauty[]> {
    return this.cosmeticBeautyService.findAll();
  }
}
