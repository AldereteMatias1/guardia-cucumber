import { When, Then, Before,Given} from '@cucumber/cucumber';
import { expect } from 'chai';
import request, { SuperTest, Test } from 'supertest';
import { Test as NestTest} from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { PatientsModule } from '../../src/patients/patients.module';


let app:INestApplication;
let http: SuperTest<Test>
let lastResponse:request.Response;

//levantamos la app antes de ejecutar los escenarios. Tener en cuenta q es asincrona
Before(async()=>{
    const moduleRef = await NestTest.createTestingModule({
        imports:[PatientsModule],
    }).compile();
    app = moduleRef.createNestApplication();
    //misma config q en el main ts estamos simulando prod
    app.useGlobalPipes(
        new ValidationPipe({
        whitelist: true,        // quita propiedades que no estén en el DTO
        forbidNonWhitelisted: false, // (opcional) lanza error si mandan propiedades extra
        transform: false,        // transforma los tipos (string -> number, etc.)
        })
    )
    await app.init();

    http = request(app.getHttpServer()) as unknown as SuperTest<Test>;
}); //entonces configuramos la app test previa al escenario

Given(
    'existe un paciente con DNI {string} y email {string}',
    async (dni:string,email:string)=>{
        await http.post('/patients').send({
            dni,
            birthdate:'1995-08-21',
            email,
            phone: '+5493816543210',
            country: 'Argentina',
            obraSocial: 'OSDE',
        })
    }
)

Given(
    'no existe un paciente con DNI {string} ni email {string}',
    async (dni:string,email:string)=>{
        await http.post('/patients').send({
            dni,
            birthdate:'1995-08-21',
            email,
            phone: '+5493816543210',
            country: 'Argentina',
            obraSocial: 'OSDE',
        })
    }
)
//step:registrar un paciente
When(
    'se registra un paciente con DNI {string} y email {string}',
    async(dni:string,email:string)=>{
        lastResponse = await http.post('/patients').send({
            dni,
            birthdate:'1995-08-21',
            email,
            phone: '+5493816543210',
            country: 'Argentina',
            obraSocial: 'OSDE',
        }); //es al pedo mandar los otros campos aqui? ver de cambiar el dto pq no deberian ser opcionales el del create-patient.dto
    }
);

Then('el sistema guarda al paciente', () => {
  // Si tu API retorna 201 al crear
  expect([200, 201]).to.include(lastResponse.status);
  // Podés verificar que tenga id:
  expect(lastResponse.body).to.have.property('id');
});

Then('se devuelven los datos del paciente con DNI {string}', (dni: string) => {
  expect(lastResponse.body).to.have.property('dni', dni);
});

Then('el sistema no crea un nuevo registro', () => {
  expect([200, 201, 409]).to.include(lastResponse.status);
});

//step:verificar que se devuelvan los datos del paciente
Then('se traen los datos del paciente con DNI {string}',(dni:string)=>{
    //usamos los asserts de chai para obtener - preguntar a ivan cual uso
    expect(lastResponse.status).to.equal(201);
    expect(lastResponse.body).to.have.property('dni',dni);
});


