import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class GetServerResponse {
  @ApiProperty({
    type: String,
    example: '{unique GUID}',
    description: 'The unique GUID that can identify the server',
  })
  id: string;
  @ApiProperty({
    type: String,
    example: 'ImasCordHub',
    description: 'The name of the server',
  })
  name: string;
  @ApiProperty({
    type: String,
    example: 'https://imas-cord-hub.herokuapp.com',
    description: 'The link to the server',
    enum: [
      '765as',
      'cinderella',
      'million',
      'shiny',
      'sidem',
      'others',
      'joint',
    ],
  })
  ip:
    | '765as'
    | 'cinderella'
    | 'million'
    | 'shiny'
    | 'sidem'
    | 'others'
    | 'joint';
  @ApiProperty({
    type: Array<string>,
    example: ['Haruka Amami', 'Chihaya Kisaragi'],
    description:
      'The list of waifus (e.g. tantou) in the server (if any registered. Empty array will be returned if none.)',
  })
  waifu: Array<string>;
  @ApiProperty({
    type: String,
    example: 'original description goes here',
    description: 'The description of the server submitted by the submitter.',
  })
  description: string;
  @ApiProperty({
    type: String,
    example: 'https://discord.gg/imas',
    description: 'The invite link to the server',
  })
  invite: string;
}

export class ServerNotFoundResponse {
  @ApiProperty({
    type: Number,
    example: HttpStatus.NOT_FOUND,
    description: 'The status code of the response',
  })
  statusCode: number;
  @ApiProperty({
    type: String,
    example: 'Server Not Found',
    description: 'The message of the response',
  })
  message: string;
}

export class ServerSearchTypeNotAcceptableResponse {
  @ApiProperty({
    type: Number,
    example: HttpStatus.NOT_ACCEPTABLE,
    description: 'The status code of the response',
  })
  statusCode: number;
  @ApiProperty({
    type: String,
    example: 'Invalid search type: {searchType}',
    description: 'The message of the response',
  })
  message: string;
}
