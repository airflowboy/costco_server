import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CosmeticBeautyController } from './cosmetic-beauty.controller';
import { CosmeticBeautyService } from './cosmetic-beauty.service';
import { CosmeticBeauty } from './entities/cosmetic-beauty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CosmeticBeauty])],
  controllers: [CosmeticBeautyController],
  providers: [CosmeticBeautyService],
})
export class CosmeticBeautyModule {}
