import { Controller, Get,Post,Body, Param } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { createPatientDto } from './dto/create-patient.dto';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}
  @Get()
  getAllPatients(){
    return this.patientsService.findAll();
  }
  @Get(':dni')
  getOnePatient(@Param('dni') dni: string){
    return this.patientsService.findOne(dni);
  }
  @Post()
  createPatient(@Body()data:createPatientDto){
    return this.patientsService.createNewPatient(data);
  }

}
