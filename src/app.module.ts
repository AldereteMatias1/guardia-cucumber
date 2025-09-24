import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { MedicalsModule } from './medicals/medicals.module';
import { NursesModule } from './nurses/nurses.module';

@Module({
  imports: [PatientsModule, MedicalsModule, NursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
