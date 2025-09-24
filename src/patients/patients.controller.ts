import { Controller, Get,Post,Body } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { createPatientDto } from './dto/create-patient.dto';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}
  @Get()
  getAllPatients(){
    return this.patientsService.findAll();
  }
  @Post()
  createPatient(@Body()data:createPatientDto){
    return this.patientsService.createNewPatient(data);
  }

}
