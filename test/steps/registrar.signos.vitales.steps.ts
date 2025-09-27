import { When, Then, Before,Given} from '@cucumber/cucumber';
import { expect } from 'chai';
import { TestWorld } from 'test/support/world';


When(
  'se registran los signos vitales T {string} SO {string} TA1 {string} TA2 {string} FC {string} asociados al DNI {string}',
  function (this: TestWorld, t: string, so: string, ta1: string, ta2: string, fc: string, dni: string) {
    this.signosVitales = {
      temperatura: Number(t),
      saturacionOxigeno: Number(so),
      tensionMax: Number(ta1),
      tensionMin: Number(ta2),
      frecuenciaCardiaca: Number(fc),
    };

    // Usá la instancia compartida
    this.lastResult = this.vitalSignsService.assignVitalSignsToPatient(this.signosVitales, dni);
  }
);

Then(
  'el sistema muestra los signosVitales del paciente con DNI {string}',
  function (this: TestWorld, dni: string) {
    // Podés validar todo el objeto o las claves principales
    expect(this.lastResult).to.include({
      temperatura: this.signosVitales.temperatura,
      saturacionOxigeno: this.signosVitales.saturacionOxigeno,
      tensionMax: this.signosVitales.tensionMax,
      tensionMin: this.signosVitales.tensionMin,
      frecuenciaCardiaca: this.signosVitales.frecuenciaCardiaca,
    });
  }
);

// Then(/^el sistema advierte que (.+) está fuera de rango$/, (campo: string) => {
//   expect([400, 422]).to.include(
//     lastResponse.status,
//     `Se esperaba 400/422 cuando ${campo} está fuera de rango; fue ${lastResponse.status}`,
//   );
// });