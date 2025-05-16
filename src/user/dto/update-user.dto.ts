// src/user/dto/update-user.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    description: 'User name (optional)',
    example: 'John Doe',
    required: false,
  })
  name?: string;

  @ApiProperty({
    description: 'User email (optional)',
    example: 'johndoe@example.com',
    required: false,
  })
  email?: string;

  @ApiProperty({
    description: 'User phone number (optional)',
    example: '+1234567890',
    required: false,
  })
  phone?: string;
}
