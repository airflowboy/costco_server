import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kirkland } from './entities/kirkland.entity';

@Injectable()
export class KirklandService {
  constructor(
    @InjectRepository(Kirkland)
    private kirklandRepository: Repository<Kirkland>,
  ) {}

  async findOne(id: number): Promise<Kirkland> {
    const item = await this.kirklandRepository.findOne({ where: { id } });
    if (!item) {
      throw new NotFoundException(`ID가 ${id}인 상품을 찾을 수 없습니다`);
    }
    return item;
  }

  async findAll(): Promise<Kirkland[]> {
    return this.kirklandRepository.find({
      take: 10,
      order: { id: 'DESC' },
    });
  }
}
