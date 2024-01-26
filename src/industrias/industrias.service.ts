import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class IndustriasService {
  constructor(private readonly databaseService: DatabaseService) {}

  cadastrarIndustrias(industrias: Prisma.IndustriasCreateInput) {
    return this.databaseService.industrias.create({
      data: industrias,
    });
  }

  listarIndustrias() {
    return this.databaseService.industrias.findMany({
      orderBy: {
        industrias: 'asc',
      },
    });
  }
}
