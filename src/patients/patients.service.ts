import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Patient } from './entities/patient';
import { createPatientDto } from './dto/create-patient.dto';
import { randomUUID, UUID } from 'node:crypto';

@Injectable()
export class PatientsService {
  private patients:Patient[] = []; //trabajamos en mem x ahora
  createNewPatient(data:createPatientDto):Patient {
  const existing = this.findOne(data.dni);
  if (existing) return existing
  const newPatient: Patient = {
      id:randomUUID(),
      ...data, //Tmb podemos hacer con Object.assign()
    };
    this.patients.push(newPatient);
    return newPatient;
  }
  findOne(dni:string){
    const foundPatient = this.patients.find(p=>p.dni === dni);
    if(!foundPatient) return null;
    return foundPatient ?? null;
  }
  findAll(){
    return this.patients;
  }
}
