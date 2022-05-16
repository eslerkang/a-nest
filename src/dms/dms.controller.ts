import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('DM')
@Controller('api/workspaces/:url/dms')
export class DmsController {
  @ApiParam({
    name: 'url',
    description: '워크스페이스 url',
    required: true,
  })
  @ApiParam({
    name: 'id',
    description: '사용자 id',
    required: true,
  })
  @ApiQuery({
    name: 'perPage',
    required: true,
    description: '한번에 가져오는 개수',
    type: Number,
  })
  @ApiQuery({
    name: 'page',
    required: true,
    description: '불러올 페이지',
    type: Number,
  })
  @Get(':id/chats')
  getChat(@Query() query, @Param('id') id, @Param('url') url) {
    return 'getChat';
  }

  @Post(':id/chats')
  postChat(@Body() Body, @Param('id') id, @Param('url') url) {
    return id;
  }
}
