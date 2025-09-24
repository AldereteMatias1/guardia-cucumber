import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { MedicalsModule } from './medicals/medicals.module';
import { NursesModule } from './nurses/nurses.module';
import { VitalSignsModule } from './vital-signs/vital-signs.module';

@Module({
  imports: [PatientsModule, MedicalsModule, NursesModule, VitalSignsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
