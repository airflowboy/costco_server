import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CosmeticBeautyService } from './cosmetic-beauty.service';
import { CosmeticBeautyPaper } from './entities/cosmetic-beauty.entity';

@Controller('cosmetic-beauty-paper')
export class CosmeticBeautyController {
  constructor(private readonly cosmeticBeautyService: CosmeticBeautyService) {}

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CosmeticBeautyPaper> {
    return this.cosmeticBeautyService.findOne(id);
  }

  @Get()
  async findAll(): Promise<CosmeticBeautyPaper[]> {
    return this.cosmeticBeautyService.findAll();
  }
}
