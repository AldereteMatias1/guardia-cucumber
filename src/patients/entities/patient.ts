import { VitalSign } from "src/vital-signs/entities/vital-sign.entity";

export class Patient {
  id: string;           // lo genera el sistema
  dni: string;
  birthdate: Date;
  email: string;
  phone: string;
  country: string;
  obraSocial: string;
  vitalSigns:VitalSign;
}

