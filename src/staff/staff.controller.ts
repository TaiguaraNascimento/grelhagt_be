import { Controller } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Body, Post, Put, Delete, Get } from '@nestjs/common';
import { StaffService } from './staff.service';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Post('novo')
  adicionarNovoStaff(@Body() staff: Prisma.StaffCreateInput) {
    this.staffService.criarStaff(staff);
  }
}
