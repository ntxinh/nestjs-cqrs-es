import { EntityRepository, Repository } from 'typeorm';
import { Hero } from '../entities/hero.entity';

@EntityRepository(Hero)
export class HeroRepository extends Repository<Hero> {
  public async findById(id: string): Promise<Hero> {
    return await this.findOne(id);
  }

  public async findAll(): Promise<Hero[]> {
    return await this.find();
  }

  public async createHero(heroDto): Promise<Hero> {
    // Save to db
    const hero = new Hero();
    hero.setData(heroDto);
    return await this.save(hero);
  }
}
