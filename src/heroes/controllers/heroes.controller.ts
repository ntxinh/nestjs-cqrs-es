import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UowService } from '../../globals/unit-of-work/uow.service';
import { HeroDto } from '../dtos/hero.dto';
import { Hero } from '../entities/hero.entity';
import { Test } from '../entities/test.entity';
import { KillDragonDto } from '../interfaces/kill-dragon-dto.interface';
import { HeroesService } from '../services/heros.service';

@Controller('heroes')
@ApiTags('Heroes')
export class HeroesGameController {
  constructor(private readonly heroesService: HeroesService,
              private readonly uowService: UowService) {}

  @ApiOperation({ summary: 'Get A Hero' })
  @ApiResponse({ status: 200, description: 'Get hero by id' })
  @Get(':id')
  public async findById(@Param('id') id: string): Promise<Hero> {
    return await this.heroesService.findById(id);
  }

  @ApiOperation({ summary: 'Get Heroes' })
  @ApiResponse({ status: 200, description: 'Get heroes' })
  @Get()
  public async findAll(): Promise<Hero[]> {
    const test1 = new Test();
    test1.name = 'Hero 1';
    this.uowService.beginWork();
    await this.uowService.create(test1);
    await this.uowService.commitWork();
    return await this.heroesService.findAll();
  }

  @ApiOperation({ summary: 'Create Hero' })
  @ApiResponse({ status: 201, description: 'Create hero' })
  @Post()
  public async create(@Body() dto: HeroDto): Promise<boolean> {
    await this.heroesService.create(dto);
    return true;
  }

  @ApiOperation({ summary: 'Kill Dragon' })
  @ApiResponse({ status: 200, description: 'Hero kill dragon' })
  @Post(':id/kill')
  public async killDragon(@Param('id') id: string, @Body() dto: KillDragonDto): Promise<void> {
    return await this.heroesService.killDragon(id, dto);
  }
}
