import { ApiProperty } from '@nestjs/swagger';

export class GetHelloResponse {
  @ApiProperty({
    type: String,
    example: 'Welcome to the API of the imas-cord-hub-backend!',
  })
  message: string;
}
