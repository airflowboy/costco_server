import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CosmeticBeautyController } from './cosmetic-beauty.controller';
import { CosmeticBeautyService } from './cosmetic-beauty.service';
import { CosmeticBeautyPaper } from './entities/cosmetic-beauty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CosmeticBeautyPaper])],
  controllers: [CosmeticBeautyController],
  providers: [CosmeticBeautyService],
})
export class CosmeticBeautyModule {}
