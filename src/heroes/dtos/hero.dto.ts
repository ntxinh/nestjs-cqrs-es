import { ApiProperty } from '@nestjs/swagger';

export class HeroDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}