import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('cosmetic_beauty_paper')
export class CosmeticBeautyPaper {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text', nullable: true })
  title: string;

  @Column({ type: 'text', nullable: true })
  image: string;

  @Column({ type: 'text', nullable: true })
  product_list_delivery: string;

  @Column({ type: 'text', nullable: true })
  no_translate: string;

  @Column({ type: 'text', nullable: true })
  delivery_price: string;

  @Column({ type: 'text', nullable: true })
  price: string;

  @Column({ type: 'text', nullable: true })
  name_link: string;

  @Column({ type: 'text', nullable: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  star_ratings_text: string;

  @Column({ type: 'text', nullable: true })
  sale_price: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  create_date: Date;

  @Column({ type: 'text', nullable: true })
  category: string;
}
