import { Module } from '@nestjs/common';
import { MedicalsService } from './medicals.service';
import { MedicalsController } from './medicals.controller';

@Module({
  controllers: [MedicalsController],
  providers: [MedicalsService],
})
export class MedicalsModule {}
