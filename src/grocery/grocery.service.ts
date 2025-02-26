import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grocery } from './entities/grocery.entity';

@Injectable()
export class GroceryService {
  constructor(
    @InjectRepository(Grocery)
    private groceryRepository: Repository<Grocery>,
  ) {}

  async findOne(id: number): Promise<Grocery> {
    const grocery = await this.groceryRepository.findOne({ where: { id } });

    if (!grocery) {
      throw new NotFoundException(`ID가 ${id}인 상품을 찾을 수 없습니다`);
    }

    return grocery;
  }

  async findAll(): Promise<Grocery[]> {
    return this.groceryRepository.find({
      take: 10, // 상위 10개만 가져오기
      order: { id: 'DESC' }, // 최신순 정렬
    });
  }
}
