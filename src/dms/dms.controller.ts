import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:url/dms')
export class DmsController {
  @Get(':id/chats')
  getChat(@Query() query, @Param('id') id, @Param('url') url) {
    return 'getChat';
  }

  @Post(':id/chats')
  postChat(@Body() Body, @Param('id') id, @Param('url') url) {
    return id;
  }
}
