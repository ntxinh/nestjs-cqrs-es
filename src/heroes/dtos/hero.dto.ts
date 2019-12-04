import { ApiProperty } from '@nestjs/swagger';

export class HeroDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}