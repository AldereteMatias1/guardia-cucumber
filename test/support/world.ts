// test/support/world.ts
import { setWorldConstructor } from '@cucumber/cucumber';
import { PatientsService } from '../../src/patients/patients.service';
import { VitalSignsService } from '../../src/vital-signs/vital-signs.service';

export class TestWorld {
  patientsService!: PatientsService;
  vitalSignsService!: VitalSignsService;
  lastResult: any;
  signosVitales: any;

  reset() {
    this.patientsService = new PatientsService();
    this.vitalSignsService = new VitalSignsService(this.patientsService);
    this.lastResult = undefined;
    this.signosVitales = undefined;
  }
}
setWorldConstructor(TestWorld);
