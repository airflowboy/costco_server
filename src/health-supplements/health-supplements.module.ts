import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthSupplementsController } from './health-supplements.controller';
import { HealthSupplementsService } from './health-supplements.service';
import { HealthNutritionalSupplements } from './entities/health-supplement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HealthNutritionalSupplements])],
  controllers: [HealthSupplementsController],
  providers: [HealthSupplementsService],
})
export class HealthSupplementsModule {}
