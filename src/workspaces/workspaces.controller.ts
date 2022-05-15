import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('api/workspaces')
export class WorkspacesController {
  @Get()
  getMyWorkspaces() {
    return 'get my workspaces';
  }

  @Post()
  createWorkspace() {
    return 'create workspace';
  }

  @Get(':url/members')
  getAllMembersFromWorkspace() {
    return 'get all members from workspace';
  }

  @Post(':url/members')
  inviteMembersToWorkspace() {
    return 'invite members';
  }

  @Delete(':url/members:/id')
  kickMemberFromWorkspace() {
    return 'kick member from workspace';
  }

  @Get(':url/members/:id')
  getMemberInfoInWorkspace() {
    return 'get member info in workspace';
  }
}
