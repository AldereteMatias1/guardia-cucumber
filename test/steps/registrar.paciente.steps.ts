import { When, Then, Before,Given} from '@cucumber/cucumber';
import { expect } from 'chai';
import { PatientsService } from '../../src/patients/patients.service';
//las declaramos global x el scope
let service: PatientsService;
let lastResult:any; // el tipo que nos retornara el service en realidad siempre deberia ser un paciente. averiguar mas

Before(()=>{
    //Instanciamos el service antes de ejecutar cada esc
    service = new PatientsService();
    lastResult = undefined;
});

/*Scenario:Registrar un paciente nuevo
    Given no existe un paciente con DNI "45678901"
    When se registra un paciente con DNI "45678901"
    Then el sistema crea un nuevo paciente con DNI "45678901"
*/
Given('no existe un paciente con DNI {string}',
    (dni:string)=>{
        const existing = service.findOne(dni);
        expect(existing).to.be.null;
    });
When('se registra un paciente con DNI {string}',
    async (dni:string)=>{
        lastResult = await service.createNewPatient({
            dni,
            birthdate: new Date("1990-05-15"),
            email: "juan.perez@example.com",
            phone: "+5493811234567",
            country: "Argentina",
            obraSocial: "OSDE"
        });
    }
)
Then('el sistema crea un nuevo paciente con DNI {string}',
    (dni:string)=>{
        expect(lastResult.patient).to.have.property('dni',dni)
    }
);

/*Scenario: Intentar registrar un paciente ya existente
    Given existe un paciente con DNI "45678901"
    When se registra un paciente con DNI "45678901"
    Then el sistema no guarda el paciente con DNI "45678901"
    And se traen los datos del paciente con DNI "45678901" */
    
Given('existe un paciente con DNI {string}', //CUIDADO QUE LA SENTENCIA ES IGUAL A LA DE REGISTRAR SIGNOS VITALES-REUTILIZAR
    async(dni:string)=>{
        await service.createNewPatient({
            dni,
            birthdate: new Date("1990-05-15"),
            email: "juan.perez@example.com",
            phone: "+5493811234567",
            country: "Argentina",
            obraSocial: "OSDE"
        });
    }
);
When('se intenta registrar un paciente con DNI {string}',
    async(dni:string)=>{
        lastResult = await service.createNewPatient({
            dni,
            birthdate: new Date("1990-05-15"),
            email: "juan.perez@example.com",
            phone: "+5493811234567",
            country: "Argentina",
            obraSocial: "OSDE"
        });
    }
)
Then('el sistema no guarda el paciente con DNI {string}',
    (dni:string)=>{expect(lastResult.created).to.be.false}
);
Then('se traen los datos del paciente con DNI {string}',
    (dni:string)=>{
        expect(lastResult.patient).to.have.property('dni',dni)
    }
);




