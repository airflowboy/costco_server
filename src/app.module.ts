import { Module } from '@nestjs/common';
import { HomeController } from './home/home.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { GroceryModule } from './grocery/grocery.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    GroceryModule,
  ],
  controllers: [HomeController],
  providers: [],
})
export class AppModule {}
