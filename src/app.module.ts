import { Module } from '@nestjs/common';
import { HomeController } from './home/home.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { GroceryModule } from './grocery/grocery.module';
import { CosmeticBeautyModule } from './cosmetic-beauty/cosmetic-beauty.module';
import { HealthSupplementsModule } from './health-supplements/health-supplements.module';
import { KirklandModule } from './kirkland/kirkland.module';
import { SameDayDeliveryModule } from './same-day-delivery/same-day-delivery.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    GroceryModule,
    CosmeticBeautyModule,
    HealthSupplementsModule,
    KirklandModule,
    SameDayDeliveryModule,
  ],
  controllers: [HomeController],
  providers: [],
})
export class AppModule {}
