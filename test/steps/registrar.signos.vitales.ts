import { When, Then, Before,Given} from '@cucumber/cucumber';
import { expect } from 'chai';
import request, { SuperTest, Test } from 'supertest';
import { Test as NestTest} from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { PatientsModule } from '../../src/patients/patients.module';


let app:INestApplication;
let http: SuperTest<Test>
let lastResponse:request.Response;


Before(async()=>{
    const moduleRef = await NestTest.createTestingModule({
        imports:[PatientsModule],
    }).compile();
    app = moduleRef.createNestApplication();
    
    app.useGlobalPipes(
        new ValidationPipe({
        whitelist: true,        
        forbidNonWhitelisted: false, 
        transform: false,        
        })
    )
    await app.init();

    http = request(app.getHttpServer()) as unknown as SuperTest<Test>;
}); 

//Scenario:Tomar signos vitales validos
Given(
    'existe un paciente con DNI {string}',
    async (dni:string)=>{
        await http.post('/patients').send({
            dni,
            birthdate:'1995-08-21',
            email:"example@example.com",
            phone: '+5493816543210',
            country: 'Argentina',
            obraSocial: 'OSDE',
        });
    }
);
let signosVitales:any;
When(
  'se registran los signos vitales T {string} SO {string} TA1 {string} TA2 {string} FC {string} asociados al DNI {string}',

  async (t: string, so: string, ta1: string, ta2: string, fc: string, dni: string) => {
    signosVitales = {
      temperatura: Number(t),
      saturacionOxigeno: Number(so),
      tensionMax: Number(ta1),
      tensionMin: Number(ta2),
      frecuenciaCardiaca: Number(fc),
    };

    lastResponse = await http.patch(`/patients/${dni}`).send(signosVitales);
  },
);
Then(
    'el sistema asigna los signosVitales al paciente con DNI {string}',
    async(dni:string)=>{
        expect(lastResponse.status).to.equal(200);
        expect(lastResponse.body.dni).to.equal(dni);
        expect(lastResponse.body.vitalSigns).to.include(signosVitales);
    }
);

Then('el sistema advierte que la temperatura T está fuera de rango', () => {
  expect([400, 422]).to.include(lastResponse.status, 
    `la temperatura esta fuera de rango`
  ); 
});