import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { HeroesService } from '../services/heros.service';
import { KillDragonDto } from '../interfaces/kill-dragon-dto.interface';
import { Hero } from '../entities/hero.entity';
import { HeroDto } from '../dtos/hero.dto';

@Controller('hero')
@ApiTags('Heroes')
export class HeroesGameController {
  constructor(
    private readonly heroesService: HeroesService,
  ) {}

  @ApiOperation({ summary: 'Get Heroes' })
  @ApiResponse({ status: 200, description: 'Get heroes' })
  @Get()
  async findAll(): Promise<Hero[]> {
    return this.heroesService.findAll();
  }

  @ApiOperation({ summary: 'Create Hero' })
  @ApiResponse({ status: 201, description: 'Create hero' })
  @Post()
  async create(@Body() dto: HeroDto) {
    console.log('create hero controller');
    await this.heroesService.create(dto);
    return true;
  }

  @ApiOperation({ summary: 'Kill Dragon' })
  @ApiResponse({ status: 200, description: 'Hero kill dragon' })
  @Post(':id/kill')
  async killDragon(@Param('id') id: number, @Body() dto: KillDragonDto) {
    return this.heroesService.killDragon(id, dto);
  }
}