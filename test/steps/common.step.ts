import { Given } from '@cucumber/cucumber';
import { TestWorld } from '../support/world';

Given('existe un paciente con DNI {string}', async function (this: TestWorld, dni: string) {
  await this.patientsService.createNewPatient({
    dni,
    birthdate: new Date('1990-05-15'),
    email: 'juan.perez@example.com',
    phone: '+5493811234567',
    country: 'Argentina',
    obraSocial: 'OSDE',
  });
});