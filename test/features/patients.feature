Feature: Registro de paciente
    Para asegurar la integridad de los registros
    Como usuario del sistema
    Quiero poder registrar pacientes de manera confiable

Scenario:Registrar un paciente nuevo
    Given no existe un paciente con DNI "45678901" ni email "juan.perez@example.com"
    When se registra un paciente con DNI "45678901" y email "juan.perez@example.com"
    Then el sistema guarda al paciente
    And se traen los datos del paciente con DNI "45678901"

Scenario: Intentar registrar un paciente ya existente
    Given existe un paciente con DNI "45678901" y email "juan.perez@example.com"
    When se registra un paciente con DNI "45678901" y email "juan.perez@example.com"
    Then el sistema no crea un nuevo registro
    And se traen los datos del paciente con DNI "45678901"
@signosVitales
Scenario: Tomar signos vitales validos 
    Given existe un paciente con DNI "45678901"
    When se registran los signos vitales T "39" SO "98" TA1 "120" TA2 "90" FC "100" asociados al DNI "45678901"
    Then el sistema asigna los signosVitales al paciente con DNI "45678901"
