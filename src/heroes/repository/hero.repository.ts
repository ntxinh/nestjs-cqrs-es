import { Repository, EntityRepository } from 'typeorm';
import { Hero } from '../entities/hero.entity';

@EntityRepository(Hero)
export class HeroRepository extends Repository<Hero> {

  async findOneById(id: number): Promise<Hero> {
    return await this.findOne(id);
  }

  async findAll(): Promise<Hero[]> {
    return await this.find();
  }

  async createHero(heroDto): Promise<Hero> {
    const hero = new Hero();
    hero.setData(heroDto);
    hero.createHero();
    return await this.save(hero);
  }
}