import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SameDayDelivery } from './entities/same-day-delivery.entity';

@Injectable()
export class SameDayDeliveryService {
  constructor(
    @InjectRepository(SameDayDelivery)
    private sameDayDeliveryRepository: Repository<SameDayDelivery>,
  ) {}

  async findOne(id: number): Promise<SameDayDelivery> {
    const item = await this.sameDayDeliveryRepository.findOne({
      where: { id },
    });
    if (!item) {
      throw new NotFoundException(`ID가 ${id}인 상품을 찾을 수 없습니다`);
    }
    return item;
  }

  async findAll(): Promise<SameDayDelivery[]> {
    return this.sameDayDeliveryRepository.find({
      take: 10,
      order: { id: 'DESC' },
    });
  }
}
