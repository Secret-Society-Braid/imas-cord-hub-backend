import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class GetFansiteResponse {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  id: number;
  @ApiProperty({
    type: String,
    example: 'imas-cord-hub',
  })
  name: string;
  @ApiProperty({
    type: String,
    example: 'https://imas-cord-hub.herokuapp.com',
  })
  link: string;
  @ApiProperty({
    type: String,
    example: 'original description goes here',
  })
  description: string;
  @ApiProperty({
    type: String,
    example: 'Haruka Amami',
  })
  waifu: string;
}

export class FansiteNotFoundResponse {
  @ApiProperty({
    type: Number,
    example: HttpStatus.NOT_FOUND,
  })
  statusCode: number;
  @ApiProperty({
    type: String,
    example: 'Fansite Not Found',
  })
  message: string;
}

export class FansiteSearchTypeNotAcceptableResponse {
  @ApiProperty({
    type: Number,
    example: HttpStatus.NOT_ACCEPTABLE,
  })
  statusCode: number;
  @ApiProperty({
    type: String,
    example: 'Invalid search type: {searchType}',
  })
  message: string;
}
