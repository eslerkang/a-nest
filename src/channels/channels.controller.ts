import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('CHANNEL')
@Controller('api/workspaces/:url/channels')
export class ChannelsController {
  @Get()
  getAllChannels() {
    return 'all channels';
  }

  @Post()
  createChannel() {
    return 'all channels';
  }

  @Get(':name')
  getSpecificChannel() {
    return 'a channel';
  }

  @Get(':name/chats')
  getChat(@Query() query, @Param('name') name, @Param('url') url) {
    return 'getChat';
  }

  @Post(':name/chats')
  postChat(@Body() Body, @Param('name') name, @Param('url') url) {
    return name;
  }

  @Post(':name/members')
  inviteMembers() {
    return 'invite members';
  }

  @Get(':name/members')
  getAllMembers() {
    return 'get all members';
  }
}
