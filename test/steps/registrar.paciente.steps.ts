import { When, Then, Before,Given} from '@cucumber/cucumber';
import { expect } from 'chai';
import { TestWorld } from 'test/support/world';


Given('no existe un paciente con DNI {string}', function (this: TestWorld, dni: string) {
  const existing = this.patientsService.findOne(dni);
  expect(existing).to.be.null;
});

When('se registra un paciente con DNI {string}', async function (this: TestWorld, dni: string) {
  this.lastResult = await this.patientsService.createNewPatient({
    dni,
    birthdate: new Date('1990-05-15'),
    email: 'juan.perez@example.com',
    phone: '+5493811234567',
    country: 'Argentina',
    obraSocial: 'OSDE',
  });
});

Then('el sistema crea un nuevo paciente con DNI {string}', function (this: TestWorld, dni: string) {
  expect(this.lastResult).to.have.property('created', true);
  expect(this.lastResult.patient).to.have.property('dni', dni);
});

/* Scenario: Intentar registrar un paciente ya existente
   Given existe un paciente con DNI "45678901"   <-- definido en commons.steps.ts
   When se intenta registrar un paciente con DNI "45678901"
   Then el sistema no guarda el paciente con DNI "45678901"
   And se traen los datos del paciente con DNI "45678901"
*/

When('se intenta registrar un paciente con DNI {string}', async function (this: TestWorld, dni: string) {
  this.lastResult = await this.patientsService.createNewPatient({
    dni,
    birthdate: new Date('1990-05-15'),
    email: 'juan.perez@example.com',
    phone: '+5493811234567',
    country: 'Argentina',
    obraSocial: 'OSDE',
  });
});

Then('el sistema no guarda el paciente con DNI {string}', function (this: TestWorld, _dni: string) {
  expect(this.lastResult).to.have.property('created', false);
});

Then('se traen los datos del paciente con DNI {string}', function (this: TestWorld, dni: string) {
  expect(this.lastResult.patient).to.have.property('dni', dni);
});




