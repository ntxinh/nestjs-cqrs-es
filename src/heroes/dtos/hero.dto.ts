import { ApiProperty } from '@nestjs/swagger';

export class HeroDto {
  @ApiProperty()
  public id: string;

  @ApiProperty()
  public name: string;
}
