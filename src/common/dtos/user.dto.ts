import { ApiProperty, PickType } from '@nestjs/swagger';
import { JoinRequestDto } from 'src/users/dtos/join.request.dto';

export class UserDto extends PickType(JoinRequestDto, ['email', 'nickname']) {
  @ApiProperty({
    required: true,
    example: 1,
    description: '아이디',
  })
  id: number;
}
