import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get(':id')
  findAll(): string {
    return 'Find All';
  }

  @Post()
  create(): string {
    return 'create';
  }

  @Put(':id')
  update(): string {
    return 'update';
  }

  @Delete(':id')
  delete(): string {
    return 'delete';
  }
}
