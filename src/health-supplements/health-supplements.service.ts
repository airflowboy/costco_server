import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HealthSupplement } from './entities/health-supplement.entity';

@Injectable()
export class HealthSupplementsService {
  constructor(
    @InjectRepository(HealthSupplement)
    private healthSupplementRepository: Repository<HealthSupplement>,
  ) {}

  async findOne(id: number): Promise<HealthSupplement> {
    const item = await this.healthSupplementRepository.findOne({
      where: { id },
    });
    if (!item) {
      throw new NotFoundException(`ID가 ${id}인 상품을 찾을 수 없습니다`);
    }
    return item;
  }

  async findAll(): Promise<HealthSupplement[]> {
    return this.healthSupplementRepository.find({
      take: 10,
      order: { id: 'DESC' },
    });
  }
}
