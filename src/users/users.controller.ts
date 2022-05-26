import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/decorators/user.decorator';
import { UserDto } from 'src/common/dtos/user.dto';
import { JoinRequestDto } from './dtos/join.request.dto';
import { UsersService } from './users.service';

@ApiTags('USER')
@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiResponse({
    type: UserDto,
    status: 200,
    description: '성공',
  })
  @ApiResponse({
    status: 500,
    description: '서버에러',
  })
  @ApiOperation({
    summary: '내 정보 조회',
  })
  @Get()
  getUsers(@User() user) {
    return user;
  }

  @ApiOperation({
    summary: '회원가입',
  })
  @Post()
  async postUsers(@Body() data: JoinRequestDto) {
    const { email, nickname, password } = data;
    return await this.usersService.join(email, nickname, password);
  }

  @ApiOperation({
    summary: '로그인',
  })
  @Post('login')
  logIn() {
    return 'login';
  }

  @ApiOperation({
    summary: '로그아웃',
  })
  @Post('logout')
  logOut(@Req() req, @Res() res) {
    req.logOut();
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('ok');
  }
}
