import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SameDayDeliveryController } from './same-day-delivery.controller';
import { SameDayDeliveryService } from './same-day-delivery.service';
import { SameDayDelivery } from './entities/same-day-delivery.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SameDayDelivery])],
  controllers: [SameDayDeliveryController],
  providers: [SameDayDeliveryService],
})
export class SameDayDeliveryModule {}
