import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthSupplementsController } from './health-supplements.controller';
import { HealthSupplementsService } from './health-supplements.service';
import { HealthSupplement } from './entities/health-supplement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HealthSupplement])],
  controllers: [HealthSupplementsController],
  providers: [HealthSupplementsService],
})
export class HealthSupplementsModule {}
