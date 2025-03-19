import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HealthNutritionalSupplements } from './entities/health-supplement.entity';

@Injectable()
export class HealthSupplementsService {
  constructor(
    @InjectRepository(HealthNutritionalSupplements)
    private healthSupplementRepository: Repository<HealthNutritionalSupplements>,
  ) {}

  async findOne(id: number): Promise<HealthNutritionalSupplements> {
    const item = await this.healthSupplementRepository.findOne({
      where: { id },
    });
    if (!item) {
      throw new NotFoundException(`ID가 ${id}인 상품을 찾을 수 없습니다`);
    }
    return item;
  }

  async findAll(): Promise<HealthNutritionalSupplements[]> {
    return this.healthSupplementRepository.find({
      take: 10,
      order: { id: 'DESC' },
    });
  }
}
