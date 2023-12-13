import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class StaffService {
  constructor(private readonly databaseService: DatabaseService) {}

  criarStaff(staff: Prisma.StaffCreateInput) {
    this.databaseService.staff.create({
      data: staff,
    });
  }
}
