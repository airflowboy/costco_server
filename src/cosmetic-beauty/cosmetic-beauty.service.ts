import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CosmeticBeautyPaper } from './entities/cosmetic-beauty.entity';

@Injectable()
export class CosmeticBeautyService {
  constructor(
    @InjectRepository(CosmeticBeautyPaper)
    private cosmeticBeautyRepository: Repository<CosmeticBeautyPaper>,
  ) {}

  async findOne(id: number): Promise<CosmeticBeautyPaper> {
    const item = await this.cosmeticBeautyRepository.findOne({
      where: { id },
    });
    if (!item) {
      throw new NotFoundException(`ID가 ${id}인 상품을 찾을 수 없습니다`);
    }
    return item;
  }

  async findAll(): Promise<CosmeticBeautyPaper[]> {
    return this.cosmeticBeautyRepository.find({
      take: 10,
      order: { id: 'DESC' },
    });
  }
}
