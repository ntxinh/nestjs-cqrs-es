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
    // Save to db
    const hero = new Hero();
    hero.setData(heroDto);
    await this.save(hero);
    // Apply event
    hero.createHero();
    return hero;
  }
}