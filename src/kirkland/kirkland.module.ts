import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KirklandController } from './kirkland.controller';
import { KirklandService } from './kirkland.service';
import { Kirkland } from './entities/kirkland.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Kirkland])],
  controllers: [KirklandController],
  providers: [KirklandService],
})
export class KirklandModule {}
