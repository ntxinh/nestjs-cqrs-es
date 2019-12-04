import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { HeroesService } from '../services/heros.service';
import { KillDragonDto } from '../interfaces/kill-dragon-dto.interface';
import { Hero } from '../entities/hero.entity';

@Controller('hero')
@ApiUseTags('Heroes')
export class HeroesGameController {
  constructor(
    private readonly heroesService: HeroesService,
  ) {}

  @ApiOperation({ title: 'Kill Dragon' })
  @ApiResponse({ status: 200, description: 'Hero kill dragon' })
  @Post(':id/kill')
  async killDragon(@Param('id') id: number, @Body() dto: KillDragonDto) {
    return this.heroesService.killDragon(id, dto);
  }

  @ApiOperation({ title: 'Get Heroes' })
  @ApiResponse({ status: 200, description: 'Get heroes' })
  @Get()
  async findAll(): Promise<Hero[]> {
    return this.heroesService.findAll();
  }
}