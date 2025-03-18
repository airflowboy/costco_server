import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CosmeticBeauty } from './entities/cosmetic-beauty.entity';

@Injectable()
export class CosmeticBeautyService {
  constructor(
    @InjectRepository(CosmeticBeauty)
    private cosmeticBeautyRepository: Repository<CosmeticBeauty>,
  ) {}

  async findOne(id: number): Promise<CosmeticBeauty> {
    const item = await this.cosmeticBeautyRepository.findOne({ where: { id } });
    if (!item) {
      throw new NotFoundException(`ID가 ${id}인 상품을 찾을 수 없습니다`);
    }
    return item;
  }

  async findAll(): Promise<CosmeticBeauty[]> {
    return this.cosmeticBeautyRepository.find({
      take: 10,
      order: { id: 'DESC' },
    });
  }
}
