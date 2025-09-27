import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVitalSignDto } from './dto/create-vital-sign.dto';
import { UpdateVitalSignDto } from './dto/update-vital-sign.dto';
import { PatientsService } from '../../src/patients/patients.service';


@Injectable()
export class VitalSignsService {

  constructor(private readonly patientService: PatientsService) {}

  create(createVitalSignDto: CreateVitalSignDto) {
    return 'This action adds a new vitalSign';
  }

  findAll() {
    return `This action returns all vitalSigns`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vitalSign`;
  }

  update(id: number, updateVitalSignDto: UpdateVitalSignDto) {
    return `This action updates a #${id} vitalSign`;
  }

  remove(id: number) {
    return `This action removes a #${id} vitalSign`;
  }

  assignVitalSignsToPatient(vitalSigns: CreateVitalSignDto, dni: string) {
      const p = this.patientService.findOne(dni);
      if(!p) throw new NotFoundException();
      p.vitalSigns = {
        ...p.vitalSigns,
        ...vitalSigns
      }
      //aqui deberíamos guardarlo como tal a los cambios
      return p.vitalSigns;
  }
}
