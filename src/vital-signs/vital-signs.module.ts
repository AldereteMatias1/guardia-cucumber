import { Module } from '@nestjs/common';
import { VitalSignsService } from './vital-signs.service';
import { VitalSignsController } from './vital-signs.controller';
import { PatientsService } from 'src/patients/patients.service';

@Module({
  controllers: [VitalSignsController],
  providers: [VitalSignsService],
  imports:[PatientsService]
})
export class VitalSignsModule {}
