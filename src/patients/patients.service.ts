import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID, UUID } from 'node:crypto';
import { Patient } from './entities/patient';
import { createPatientDto } from './dto/create-patient.dto';
import { VitalSign } from '../vital-signs/entities/vital-sign.entity';
import { UpdateVitalSignDto } from '../vital-signs/dto/update-vital-sign.dto';


@Injectable()
export class PatientsService {
  private patients:Patient[] = []; //trabajamos en mem x ahora
  createNewPatient(data:createPatientDto):Patient {
  const existing = this.findOne(data.dni);
  if (existing) return existing
  const newPatient: Patient = {
      id:randomUUID(),
      vitalSigns:new VitalSign(), //arrancan undefined
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
  updateVitalSigns(data:UpdateVitalSignDto,dni:string){
    const existing = this.findOne(dni);
    if(!existing) throw new NotFoundException(`Paciente con dni ${dni} no encontrado}`);
    existing.vitalSigns = {
      ...existing.vitalSigns,
      ...data,
      fechaRegistro : new Date()
    }
    return existing;
  }
}
